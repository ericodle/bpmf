# Clear existing data
User.destroy_all
Lesson.destroy_all
Achievement.destroy_all
LessonProgress.destroy_all

# Create BPMF lessons - Complete Zhuyin (BPMF) phonetic system
lessons_data = [
  {
    order: 1,
    title: "Welcome to BPMF!",
    content: "Welcome! Let's learn the phonetic alphabet used in Taiwan. BPMF (also called Zhuyin) helps you read Chinese characters by their sounds. There are 37 characters total: 21 initials (consonants) and 16 finals (vowels).",
    lesson_type: "introduction",
    bpmf_symbol: nil,
    pronunciation: nil,
    examples: nil
  },
  # Initials (Consonants) - Group 1: Labials
  {
    order: 2,
    title: "ㄅ (B)",
    content: "Let's start with ㄅ! This is the first character in BPMF. It sounds like 'b' in English, as in 'bat' or 'book'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄅ",
    pronunciation: "b",
    examples: "ㄅㄚ (ba), ㄅㄛ (bo), ㄅㄞ (bai), ㄅㄟ (bei)"
  },
  {
    order: 3,
    title: "ㄆ (P)",
    content: "Next is ㄆ! This symbol sounds like 'p' in English, as in 'pat' or 'park'. Notice it's similar to ㄅ but with an extra stroke.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄆ",
    pronunciation: "p",
    examples: "ㄆㄚ (pa), ㄆㄛ (po), ㄆㄞ (pai), ㄆㄟ (pei)"
  },
  {
    order: 4,
    title: "ㄇ (M)",
    content: "Now let's learn ㄇ! This symbol sounds like 'm' in English, as in 'mother' or 'moon'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄇ",
    pronunciation: "m",
    examples: "ㄇㄚ (ma), ㄇㄛ (mo), ㄇㄞ (mai), ㄇㄟ (mei)"
  },
  {
    order: 5,
    title: "ㄈ (F)",
    content: "Here's ㄈ! This symbol sounds like 'f' in English, as in 'father' or 'fish'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄈ",
    pronunciation: "f",
    examples: "ㄈㄚ (fa), ㄈㄛ (fo), ㄈㄞ (fai), ㄈㄟ (fei)"
  },
  {
    order: 6,
    title: "Practice: ㄅ, ㄆ, ㄇ, ㄈ",
    content: "Great job! Let's practice the first group of initials. Try to identify these symbols: ㄅ, ㄆ, ㄇ, ㄈ",
    lesson_type: "practice",
    bpmf_symbol: nil,
    pronunciation: nil,
    examples: "Match the symbols: ㄅ (b), ㄆ (p), ㄇ (m), ㄈ (f)"
  },
  # Group 2: Alveolars
  {
    order: 7,
    title: "ㄉ (D)",
    content: "Moving on to ㄉ! This symbol sounds like 'd' in English, as in 'dog' or 'day'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄉ",
    pronunciation: "d",
    examples: "ㄉㄚ (da), ㄉㄛ (do), ㄉㄞ (dai), ㄉㄟ (dei)"
  },
  {
    order: 8,
    title: "ㄊ (T)",
    content: "Next is ㄊ! This symbol sounds like 't' in English, as in 'top' or 'tea'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄊ",
    pronunciation: "t",
    examples: "ㄊㄚ (ta), ㄊㄛ (to), ㄊㄞ (tai), ㄊㄟ (tei)"
  },
  {
    order: 9,
    title: "ㄋ (N)",
    content: "Let's learn ㄋ! This symbol sounds like 'n' in English, as in 'no' or 'now'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄋ",
    pronunciation: "n",
    examples: "ㄋㄚ (na), ㄋㄛ (no), ㄋㄞ (nai), ㄋㄟ (nei)"
  },
  {
    order: 10,
    title: "ㄌ (L)",
    content: "Here's ㄌ! This symbol sounds like 'l' in English, as in 'love' or 'light'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄌ",
    pronunciation: "l",
    examples: "ㄌㄚ (la), ㄌㄛ (lo), ㄌㄞ (lai), ㄌㄟ (lei)"
  },
  {
    order: 11,
    title: "Practice: ㄉ, ㄊ, ㄋ, ㄌ",
    content: "Excellent progress! Practice these alveolar sounds: ㄉ, ㄊ, ㄋ, ㄌ",
    lesson_type: "practice",
    bpmf_symbol: nil,
    pronunciation: nil,
    examples: "Match the symbols: ㄉ (d), ㄊ (t), ㄋ (n), ㄌ (l)"
  },
  # Group 3: Velars
  {
    order: 12,
    title: "ㄍ (G)",
    content: "Now let's learn ㄍ! This symbol sounds like 'g' in English, as in 'go' or 'good'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄍ",
    pronunciation: "g",
    examples: "ㄍㄚ (ga), ㄍㄛ (go), ㄍㄞ (gai), ㄍㄟ (gei)"
  },
  {
    order: 13,
    title: "ㄎ (K)",
    content: "Next is ㄎ! This symbol sounds like 'k' in English, as in 'key' or 'cat'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄎ",
    pronunciation: "k",
    examples: "ㄎㄚ (ka), ㄎㄛ (ko), ㄎㄞ (kai), ㄎㄟ (kei)"
  },
  {
    order: 14,
    title: "ㄏ (H)",
    content: "Here's ㄏ! This symbol sounds like 'h' in English, as in 'hello' or 'house'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄏ",
    pronunciation: "h",
    examples: "ㄏㄚ (ha), ㄏㄛ (ho), ㄏㄞ (hai), ㄏㄟ (hei)"
  },
  {
    order: 15,
    title: "Practice: ㄍ, ㄎ, ㄏ",
    content: "Good work! Practice these velar sounds: ㄍ, ㄎ, ㄏ",
    lesson_type: "practice",
    bpmf_symbol: nil,
    pronunciation: nil,
    examples: "Match the symbols: ㄍ (g), ㄎ (k), ㄏ (h)"
  },
  # Group 4: Palatals
  {
    order: 16,
    title: "ㄐ (J)",
    content: "Let's learn ㄐ! This symbol sounds like 'j' in English, as in 'jeep'. It's similar to the 'j' sound but softer.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄐ",
    pronunciation: "j",
    examples: "ㄐㄧ (ji), ㄐㄧㄚ (jia), ㄐㄧㄝ (jie), ㄐㄧㄠ (jiao)"
  },
  {
    order: 17,
    title: "ㄑ (Q)",
    content: "Next is ㄑ! This symbol sounds like 'ch' in English, as in 'cheese'. It's an aspirated version of ㄐ.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄑ",
    pronunciation: "q",
    examples: "ㄑㄧ (qi), ㄑㄧㄚ (qia), ㄑㄧㄝ (qie), ㄑㄧㄠ (qiao)"
  },
  {
    order: 18,
    title: "ㄒ (X)",
    content: "Here's ㄒ! This symbol sounds like 'sh' in English, as in 'sheep'. It's a fricative sound.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄒ",
    pronunciation: "x",
    examples: "ㄒㄧ (xi), ㄒㄧㄚ (xia), ㄒㄧㄝ (xie), ㄒㄧㄠ (xiao)"
  },
  {
    order: 19,
    title: "Practice: ㄐ, ㄑ, ㄒ",
    content: "Great! Practice these palatal sounds: ㄐ, ㄑ, ㄒ",
    lesson_type: "practice",
    bpmf_symbol: nil,
    pronunciation: nil,
    examples: "Match the symbols: ㄐ (j), ㄑ (q), ㄒ (x)"
  },
  # Group 5: Retroflexes
  {
    order: 20,
    title: "ㄓ (ZH)",
    content: "Now let's learn ㄓ! This symbol sounds like 'zh' in English, as in 'measure'. It's a retroflex sound.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄓ",
    pronunciation: "zh",
    examples: "ㄓㄚ (zha), ㄓㄜ (zhe), ㄓㄞ (zhai), ㄓㄟ (zhei)"
  },
  {
    order: 21,
    title: "ㄔ (CH)",
    content: "Next is ㄔ! This symbol sounds like 'ch' in English, as in 'chair'. It's an aspirated retroflex.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄔ",
    pronunciation: "ch",
    examples: "ㄔㄚ (cha), ㄔㄜ (che), ㄔㄞ (chai), ㄔㄟ (chei)"
  },
  {
    order: 22,
    title: "ㄕ (SH)",
    content: "Here's ㄕ! This symbol sounds like 'sh' in English, as in 'shoe'. It's a retroflex fricative.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄕ",
    pronunciation: "sh",
    examples: "ㄕㄚ (sha), ㄕㄜ (she), ㄕㄞ (shai), ㄕㄟ (shei)"
  },
  {
    order: 23,
    title: "ㄖ (R)",
    content: "Let's learn ㄖ! This symbol sounds like 'r' in English, as in 'red'. It's a retroflex approximant.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄖ",
    pronunciation: "r",
    examples: "ㄖㄚ (ra), ㄖㄜ (re), ㄖㄞ (rai), ㄖㄟ (rei)"
  },
  {
    order: 24,
    title: "Practice: ㄓ, ㄔ, ㄕ, ㄖ",
    content: "Excellent! Practice these retroflex sounds: ㄓ, ㄔ, ㄕ, ㄖ",
    lesson_type: "practice",
    bpmf_symbol: nil,
    pronunciation: nil,
    examples: "Match the symbols: ㄓ (zh), ㄔ (ch), ㄕ (sh), ㄖ (r)"
  },
  # Group 6: Sibilants
  {
    order: 25,
    title: "ㄗ (Z)",
    content: "Now let's learn ㄗ! This symbol sounds like 'z' in English, as in 'zoo' or 'zero'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄗ",
    pronunciation: "z",
    examples: "ㄗㄚ (za), ㄗㄜ (ze), ㄗㄞ (zai), ㄗㄟ (zei)"
  },
  {
    order: 26,
    title: "ㄘ (C)",
    content: "Next is ㄘ! This symbol sounds like 'ts' in English, as in 'cats'. It's an aspirated version of ㄗ.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄘ",
    pronunciation: "c",
    examples: "ㄘㄚ (ca), ㄘㄜ (ce), ㄘㄞ (cai), ㄘㄟ (cei)"
  },
  {
    order: 27,
    title: "ㄙ (S)",
    content: "Here's ㄙ! This symbol sounds like 's' in English, as in 'sun' or 'see'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄙ",
    pronunciation: "s",
    examples: "ㄙㄚ (sa), ㄙㄜ (se), ㄙㄞ (sai), ㄙㄟ (sei)"
  },
  {
    order: 28,
    title: "Practice: ㄗ, ㄘ, ㄙ",
    content: "Great work! Practice these sibilant sounds: ㄗ, ㄘ, ㄙ",
    lesson_type: "practice",
    bpmf_symbol: nil,
    pronunciation: nil,
    examples: "Match the symbols: ㄗ (z), ㄘ (c), ㄙ (s)"
  },
  {
    order: 29,
    title: "Review: All Initials",
    content: "Congratulations! You've learned all 21 initials! Let's review: ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙ",
    lesson_type: "practice",
    bpmf_symbol: nil,
    pronunciation: nil,
    examples: "All initials: b, p, m, f, d, t, n, l, g, k, h, j, q, x, zh, ch, sh, r, z, c, s"
  },
  # Finals (Vowels) - Group 1: Simple vowels
  {
    order: 30,
    title: "ㄚ (A)",
    content: "Now let's learn the finals (vowels)! Starting with ㄚ! This sounds like 'a' in English, as in 'father' or 'car'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄚ",
    pronunciation: "ya",
    examples: "ㄅㄚ (ba), ㄇㄚ (ma), ㄈㄚ (fa), ㄉㄚ (da)"
  },
  {
    order: 31,
    title: "ㄛ (O)",
    content: "Next is ㄛ! This sounds like 'o' in English, as in 'go' or 'so'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄛ",
    pronunciation: "wo",
    examples: "ㄅㄛ (bo), ㄆㄛ (po), ㄇㄛ (mo), ㄈㄛ (fo)"
  },
  {
    order: 32,
    title: "ㄜ (E)",
    content: "Here's ㄜ! This sounds like 'e' in English, as in 'her' or 'bird'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄜ",
    pronunciation: "ye",
    examples: "ㄅㄜ (be), ㄆㄜ (pe), ㄇㄜ (me), ㄈㄜ (fe)"
  },
  {
    order: 33,
    title: "ㄝ (Ê)",
    content: "Let's learn ㄝ! This sounds like 'e' in English, as in 'bed'. It's a different 'e' sound from ㄜ.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄝ",
    pronunciation: "ie",
    examples: "ㄅㄝ (bie), ㄆㄝ (pie), ㄇㄝ (mie), ㄈㄝ (fie)"
  },
  {
    order: 34,
    title: "Practice: ㄚ, ㄛ, ㄜ, ㄝ",
    content: "Good job! Practice these simple vowels: ㄚ, ㄛ, ㄜ, ㄝ",
    lesson_type: "practice",
    bpmf_symbol: nil,
    pronunciation: nil,
    examples: "Match the symbols: ㄚ (ya), ㄛ (wo), ㄜ (ye), ㄝ (ie)"
  },
  # Group 2: Diphthongs
  {
    order: 35,
    title: "ㄞ (AI)",
    content: "Now let's learn ㄞ! This sounds like 'ai' in English, as in 'eye' or 'buy'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄞ",
    pronunciation: "yai",
    examples: "ㄅㄞ (bai), ㄆㄞ (pai), ㄇㄞ (mai), ㄈㄞ (fai)"
  },
  {
    order: 36,
    title: "ㄟ (EI)",
    content: "Next is ㄟ! This sounds like 'ei' in English, as in 'way' or 'say'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄟ",
    pronunciation: "wei",
    examples: "ㄅㄟ (bei), ㄆㄟ (pei), ㄇㄟ (mei), ㄈㄟ (fei)"
  },
  {
    order: 37,
    title: "ㄠ (AO)",
    content: "Here's ㄠ! This sounds like 'ao' in English, as in 'cow' or 'how'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄠ",
    pronunciation: "yao",
    examples: "ㄅㄠ (bao), ㄆㄠ (pao), ㄇㄠ (mao), ㄈㄠ (fao)"
  },
  {
    order: 38,
    title: "ㄡ (OU)",
    content: "Let's learn ㄡ! This sounds like 'ou' in English, as in 'go' or 'show'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄡ",
    pronunciation: "you",
    examples: "ㄅㄡ (bou), ㄆㄡ (pou), ㄇㄡ (mou), ㄈㄡ (fou)"
  },
  {
    order: 39,
    title: "Practice: ㄞ, ㄟ, ㄠ, ㄡ",
    content: "Excellent! Practice these diphthongs: ㄞ, ㄟ, ㄠ, ㄡ",
    lesson_type: "practice",
    bpmf_symbol: nil,
    pronunciation: nil,
    examples: "Match the symbols: ㄞ (yai), ㄟ (wei), ㄠ (yao), ㄡ (you)"
  },
  # Group 3: Nasal endings
  {
    order: 40,
    title: "ㄢ (AN)",
    content: "Now let's learn ㄢ! This sounds like 'an' in English, as in 'can' or 'man'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄢ",
    pronunciation: "yan",
    examples: "ㄅㄢ (ban), ㄆㄢ (pan), ㄇㄢ (man), ㄈㄢ (fan)"
  },
  {
    order: 41,
    title: "ㄣ (EN)",
    content: "Next is ㄣ! This sounds like 'en' in English, as in 'pen' or 'ten'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄣ",
    pronunciation: "wen",
    examples: "ㄅㄣ (ben), ㄆㄣ (pen), ㄇㄣ (men), ㄈㄣ (fen)"
  },
  {
    order: 42,
    title: "ㄤ (ANG)",
    content: "Here's ㄤ! This sounds like 'ang' in English, as in 'song' or 'long'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄤ",
    pronunciation: "yang",
    examples: "ㄅㄤ (bang), ㄆㄤ (pang), ㄇㄤ (mang), ㄈㄤ (fang)"
  },
  {
    order: 43,
    title: "ㄥ (ENG)",
    content: "Let's learn ㄥ! This sounds like 'eng' in English, as in 'sing' or 'ring'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄥ",
    pronunciation: "weng",
    examples: "ㄅㄥ (beng), ㄆㄥ (peng), ㄇㄥ (meng), ㄈㄥ (feng)"
  },
  {
    order: 44,
    title: "Practice: ㄢ, ㄣ, ㄤ, ㄥ",
    content: "Great work! Practice these nasal endings: ㄢ, ㄣ, ㄤ, ㄥ",
    lesson_type: "practice",
    bpmf_symbol: nil,
    pronunciation: nil,
    examples: "Match the symbols: ㄢ (yan), ㄣ (wen), ㄤ (yang), ㄥ (weng)"
  },
  # Group 4: Special finals
  {
    order: 45,
    title: "ㄦ (ER)",
    content: "Now let's learn ㄦ! This sounds like 'er' in English, as in 'her' or 'teacher'. It's a retroflex vowel.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄦ",
    pronunciation: "er",
    examples: "ㄦ (er) - can stand alone or combine with other sounds"
  },
  {
    order: 46,
    title: "ㄧ (I)",
    content: "Here's ㄧ! This sounds like 'i' in English, as in 'see' or 'me'. It can also be used as a medial.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄧ",
    pronunciation: "yi",
    examples: "ㄧ (yi), ㄅㄧ (bi), ㄆㄧ (pi), ㄇㄧ (mi)"
  },
  {
    order: 47,
    title: "ㄨ (U)",
    content: "Let's learn ㄨ! This sounds like 'u' in English, as in 'you' or 'blue'. It can also be used as a medial.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄨ",
    pronunciation: "wu",
    examples: "ㄨ (wu), ㄅㄨ (bu), ㄆㄨ (pu), ㄇㄨ (mu)"
  },
  {
    order: 48,
    title: "ㄩ (Ü)",
    content: "Finally, let's learn ㄩ! This sounds like 'ü' (a rounded 'i' sound), as in the German 'ü'. It can also be used as a medial.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄩ",
    pronunciation: "yu",
    examples: "ㄩ (yu), ㄐㄩ (ju), ㄑㄩ (qu), ㄒㄩ (xu)"
  },
  {
    order: 49,
    title: "Practice: ㄦ, ㄧ, ㄨ, ㄩ",
    content: "Excellent! Practice these special finals: ㄦ, ㄧ, ㄨ, ㄩ",
    lesson_type: "practice",
    bpmf_symbol: nil,
    pronunciation: nil,
    examples: "Match the symbols: ㄦ (er), ㄧ (yi), ㄨ (wu), ㄩ (yu)"
  },
  {
    order: 50,
    title: "Review: All Finals",
    content: "Amazing! You've learned all 16 finals! Let's review: ㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦㄧㄨㄩ",
    lesson_type: "practice",
    bpmf_symbol: nil,
    pronunciation: nil,
    examples: "All finals: ya, wo, ye, ie, yai, wei, yao, you, yan, wen, yang, weng, er, yi, wu, yu"
  },
  {
    order: 51,
    title: "🎉 Complete BPMF System!",
    content: "Congratulations! You've learned the complete BPMF (Zhuyin) phonetic system! You now know all 37 characters: 21 initials and 16 finals. You can now read and pronounce any Chinese character using BPMF!",
    lesson_type: "introduction",
    bpmf_symbol: nil,
    pronunciation: nil,
    examples: "Complete system: ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦㄧㄨㄩ"
  }
]

lessons_data.each do |lesson_data|
  Lesson.create!(lesson_data)
end

puts "Created #{Lesson.count} lessons!"
puts "Including all 21 initials and 16 finals of the BPMF system!"
