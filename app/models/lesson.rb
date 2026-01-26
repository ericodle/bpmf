class Lesson < ApplicationRecord
  has_many :lesson_progresses, dependent: :destroy
  
  validates :order, uniqueness: true
  
  scope :by_level, ->(level) { where(level: level) }
  
  # BPMF groups - each level has 4 enemies (except some may have 3)
  BPMF_GROUPS = {
    1 => {
      name: "b, p, m, f",
      bpmf_symbols: ['ㄅ', 'ㄆ', 'ㄇ', 'ㄈ'],
      pronunciations: ['b', 'p', 'm', 'f']
    },
    2 => {
      name: "d, t, n, l",
      bpmf_symbols: ['ㄉ', 'ㄊ', 'ㄋ', 'ㄌ'],
      pronunciations: ['d', 't', 'n', 'l']
    },
    3 => {
      name: "g, k, h",
      bpmf_symbols: ['ㄍ', 'ㄎ', 'ㄏ'],
      pronunciations: ['g', 'k', 'h']
    },
    4 => {
      name: "zh, ch, sh, r",
      bpmf_symbols: ['ㄓ', 'ㄔ', 'ㄕ', 'ㄖ'],
      pronunciations: ['zh', 'ch', 'sh', 'r']
    },
    5 => {
      name: "zi, ci, si",
      bpmf_symbols: ['ㄗ', 'ㄘ', 'ㄙ'],
      pronunciations: ['zi', 'ci', 'si']
    },
    6 => {
      name: "a, o, e, ai",
      bpmf_symbols: ['ㄚ', 'ㄛ', 'ㄜ', 'ㄞ'],
      pronunciations: ['a', 'o', 'e', 'ai']
    },
    7 => {
      name: "ei, ao, ou, an",
      bpmf_symbols: ['ㄟ', 'ㄠ', 'ㄡ', 'ㄢ'],
      pronunciations: ['ei', 'ao', 'ou', 'an']
    },
    8 => {
      name: "en, ang, eng, er",
      bpmf_symbols: ['ㄣ', 'ㄤ', 'ㄥ', 'ㄦ'],
      pronunciations: ['en', 'ang', 'eng', 'er']
    },
    9 => {
      name: "yi, wu, yu",
      bpmf_symbols: ['ㄧ', 'ㄨ', 'ㄩ'],
      pronunciations: ['yi', 'wu', 'yu']
    }
  }.freeze
  
  def self.by_bpmf_group(group_number)
    group = BPMF_GROUPS[group_number]
    return none unless group
    
    where(bpmf_symbol: group[:bpmf_symbols])
  end
  
  def self.bpmf_group_for_symbol(symbol)
    return nil unless symbol
    BPMF_GROUPS.each do |group_num, group|
      return group_num if group[:bpmf_symbols].include?(symbol.strip)
    end
    nil
  end
end

