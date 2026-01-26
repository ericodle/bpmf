require 'set'

class GameController < ApplicationController
  def index
    # Determine current level based on BPMF group completion
    # Find the first incomplete level
    @current_level = 1
    max_level = Lesson::BPMF_GROUPS.keys.max
    
    (1..max_level).each do |level|
      unless check_group_completed(level)
        @current_level = level
        break
      end
      @current_level = level + 1
    end
    
    # Don't go beyond max level
    @current_level = [@current_level, max_level].min
    
    # Get lessons for current BPMF group
    group = Lesson::BPMF_GROUPS[@current_level]
    if group
      # Create a set for fast lookup - explicitly convert to strings and strip
      group_bpmf_set = Set.new(group[:bpmf_symbols].map(&:strip))
      
      # Get all lessons with BPMF symbols, then filter in Ruby to ensure exact match
      all_lessons = Lesson.where.not(bpmf_symbol: nil).to_a.select do |lesson|
        bpmf = lesson.bpmf_symbol&.strip
        next false unless bpmf
        # Double-check: ensure the BPMF symbol is exactly in our group
        is_match = group_bpmf_set.include?(bpmf)
        unless is_match
          Rails.logger.debug "Filtered out lesson #{lesson.id}: bpmf='#{bpmf}' (expected: #{group[:bpmf_symbols].inspect})"
        end
        is_match
      end
      
      # Get unique BPMF symbols - only one lesson per BPMF character
      # Prioritize lessons with earlier order numbers (simpler content)
      seen_bpmf = Set.new
      @bpmf_lessons = all_lessons.sort_by(&:order).select do |lesson|
        bpmf = lesson.bpmf_symbol&.strip
        if bpmf && group_bpmf_set.include?(bpmf) && !seen_bpmf.include?(bpmf)
          seen_bpmf.add(bpmf)
          true
        else
          false
        end
      end
      
      # Log what we're sending to the frontend
      Rails.logger.info "Level #{@current_level} (#{group[:name]}): Sending #{@bpmf_lessons.length} lessons"
      Rails.logger.info "BPMF symbols: #{@bpmf_lessons.map { |l| "#{l.bpmf_symbol}(#{l.pronunciation})" }.join(', ')}"
    else
      @bpmf_lessons = []
    end
    
    # Calculate completion status for all levels up to current
    @level_completions = {}
    (1..@current_level).each do |level|
      @level_completions[level] = check_group_completed(level)
    end
  end
  
  def restart
    # Clear all lesson progress for the current user
    @current_user.lesson_progresses.destroy_all
    redirect_to game_path
  end
  
  private
  
  def check_group_completed(group_number)
    group = Lesson::BPMF_GROUPS[group_number]
    return false unless group
    
    # Get all lessons for this group
    group_lessons = Lesson.where(bpmf_symbol: group[:bpmf_symbols]).where.not(bpmf_symbol: nil)
    
    # Check if all unique BPMF symbols in this group are completed
    unique_bpmf = group_lessons.pluck(:bpmf_symbol).compact.uniq
    return false if unique_bpmf.empty?
    
    # For each unique BPMF symbol, check if at least one lesson with that symbol is completed
    unique_bpmf.all? do |bpmf|
      lessons_with_bpmf = group_lessons.where(bpmf_symbol: bpmf)
      lessons_with_bpmf.any? do |lesson|
        @current_user.lesson_progresses.find_by(lesson: lesson)&.completed?
      end
    end
  end
end
