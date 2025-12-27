# Clear existing data
User.destroy_all
Lesson.destroy_all
Achievement.destroy_all
LessonProgress.destroy_all

# Create BPMF lessons
lessons_data = [
  {
    order: 1,
    title: "Welcome to BPMF!",
    content: "Welcome! Let's learn the phonetic alphabet used in Taiwan. BPMF helps you read Chinese characters by their sounds.",
    lesson_type: "introduction",
    bpmf_symbol: nil,
    pronunciation: nil,
    examples: nil
  },
  {
    order: 2,
    title: "ㄅ (B)",
    content: "Let's start with ㄅ! This symbol sounds like 'b' in English.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄅ",
    pronunciation: "b",
    examples: "ㄅㄚ (ba), ㄅㄛ (bo), ㄅㄞ (bai)"
  },
  {
    order: 3,
    title: "ㄆ (P)",
    content: "Next is ㄆ! This symbol sounds like 'p' in English.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄆ",
    pronunciation: "p",
    examples: "ㄆㄚ (pa), ㄆㄛ (po), ㄆㄞ (pai)"
  },
  {
    order: 4,
    title: "ㄇ (M)",
    content: "Now let's learn ㄇ! This symbol sounds like 'm' in English.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄇ",
    pronunciation: "m",
    examples: "ㄇㄚ (ma), ㄇㄛ (mo), ㄇㄞ (mai)"
  },
  {
    order: 5,
    title: "ㄈ (F)",
    content: "Here's ㄈ! This symbol sounds like 'f' in English.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄈ",
    pronunciation: "f",
    examples: "ㄈㄚ (fa), ㄈㄛ (fo), ㄈㄞ (fai)"
  },
  {
    order: 6,
    title: "Practice: ㄅ, ㄆ, ㄇ, ㄈ",
    content: "Great job! Let's practice what you've learned so far. Try to identify these symbols: ㄅ, ㄆ, ㄇ, ㄈ",
    lesson_type: "practice",
    bpmf_symbol: nil,
    pronunciation: nil,
    examples: "Match the symbols: ㄅ (b), ㄆ (p), ㄇ (m), ㄈ (f)"
  },
  {
    order: 7,
    title: "ㄉ (D)",
    content: "Moving on to ㄉ! This symbol sounds like 'd' in English.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄉ",
    pronunciation: "d",
    examples: "ㄉㄚ (da), ㄉㄛ (do), ㄉㄞ (dai)"
  },
  {
    order: 8,
    title: "ㄊ (T)",
    content: "Next is ㄊ! This symbol sounds like 't' in English.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄊ",
    pronunciation: "t",
    examples: "ㄊㄚ (ta), ㄊㄛ (to), ㄊㄞ (tai)"
  },
  {
    order: 9,
    title: "ㄋ (N)",
    content: "Let's learn ㄋ! This symbol sounds like 'n' in English.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄋ",
    pronunciation: "n",
    examples: "ㄋㄚ (na), ㄋㄛ (no), ㄋㄞ (nai)"
  },
  {
    order: 10,
    title: "ㄌ (L)",
    content: "Here's ㄌ! This symbol sounds like 'l' in English.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄌ",
    pronunciation: "l",
    examples: "ㄌㄚ (la), ㄌㄛ (lo), ㄌㄞ (lai)"
  },
  {
    order: 11,
    title: "Practice: ㄉ, ㄊ, ㄋ, ㄌ",
    content: "Excellent progress! Practice these new symbols: ㄉ, ㄊ, ㄋ, ㄌ",
    lesson_type: "practice",
    bpmf_symbol: nil,
    pronunciation: nil,
    examples: "Match the symbols: ㄉ (d), ㄊ (t), ㄋ (n), ㄌ (l)"
  }
]

lessons_data.each do |lesson_data|
  Lesson.create!(lesson_data)
end

puts "Created #{Lesson.count} lessons!"

