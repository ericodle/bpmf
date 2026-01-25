class LevelsController < ApplicationController
  def index
    @user = @current_user
    @levels = [
      { number: 1, name: "Learning BPMF Symbols", color: "#00ff88", light_color: "rgba(0, 255, 136, 0.1)" },
      { number: 2, name: "Keyboard Practice", color: "#4ade80", light_color: "rgba(74, 222, 128, 0.1)" },
      { number: 3, name: "Tone Marks & Words", color: "#22c55e", light_color: "rgba(34, 197, 94, 0.1)" }
    ]
    
    @levels.each do |level|
      lessons = Lesson.by_level(level[:number]).ordered
      progress = calculate_level_progress(@user, lessons)
      level[:progress] = progress
      level[:unlocked] = progress[:unlocked]
      
      # Find first uncompleted lesson
      first_uncompleted = lessons.find { |lesson| !@user.lesson_progresses.find_by(lesson: lesson)&.completed? }
      level[:first_uncompleted_lesson] = first_uncompleted
    end
  end
  
  def show
    @user = @current_user
    @level_number = params[:id].to_i
    @lessons = Lesson.by_level(@level_number).ordered
    @progress = calculate_level_progress(@user, @lessons)
    
    @level_info = case @level_number
    when 1
      {
        name: "Learning BPMF Symbols",
        color: "#00ff88",
        light_color: "rgba(0, 255, 136, 0.1)",
        approach: "This level follows spaced repetition and progressive disclosure principles. You'll learn symbols in logical groups (labials, alveolars, etc.) with practice sessions between groups to reinforce memory. Each lesson includes visual symbols, pronunciation guides, and real-world examples to create multiple memory associations."
      }
    when 2
      {
        name: "Keyboard Practice",
        color: "#4ade80",
        light_color: "rgba(74, 222, 128, 0.1)",
        approach: "This level uses kinesthetic learning and input practice. By physically clicking/tapping the keyboard, you're building motor memory that reinforces visual recognition. The exercises progress from simple sounds to complex combinations, following the scaffolding principle - starting easy and gradually increasing difficulty. This mirrors how children learn to type in Taiwan."
      }
    when 3
      {
        name: "Tone Marks & Word Combinations",
        color: "#22c55e",
        light_color: "rgba(34, 197, 94, 0.1)",
        approach: "This level applies meaningful learning and contextual acquisition. By combining symbols you already know with tone marks to form real words, you're creating semantic connections that enhance retention. The lessons use minimal pairs (same BPMF, different tones = different meanings) to highlight the importance of tones in Mandarin. This follows the communicative approach - learning through meaningful, real-world examples rather than isolated symbols."
      }
    else
      redirect_to levels_path and return
    end
  end
  
  private
  
  def calculate_level_progress(user, lessons)
    return { completed: 0, total: 0, percentage: 0, unlocked: false } if lessons.empty?
    
    completed = lessons.count { |lesson| user.lesson_progresses.find_by(lesson: lesson)&.completed? }
    total = lessons.count
    
    # Level 2 unlocks after completing Level 1, Level 3 unlocks after completing Level 2
    unlocked = if lessons.first.level == 2
      Lesson.by_level(1).all? { |l| user.lesson_progresses.find_by(lesson: l)&.completed? }
    elsif lessons.first.level == 3
      Lesson.by_level(2).all? { |l| user.lesson_progresses.find_by(lesson: l)&.completed? }
    else
      true # Level 1 is always unlocked
    end
    
    {
      completed: completed,
      total: total,
      percentage: total > 0 ? (completed.to_f / total * 100).round : 0,
      unlocked: unlocked
    }
  end
end

