# Clear existing data
User.destroy_all
Lesson.destroy_all
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
    title: "ㄅ",
    content: "This symbol sounds like 'b' in English, as in 'bat' or 'book'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄅ",
    pronunciation: "b",
    examples: "ㄅㄚ (ba) 爸爸 (bàba - father), ㄅㄛ (bo) 波波 (bōbō - wave), ㄅㄞ (bai) 白色 (báisè - white), ㄅㄟ (bei) 杯子 (bēizi - cup)"
  },
  {
    order: 3,
    title: "ㄆ",
    content: "This symbol sounds like 'p' in English, as in 'pat' or 'park'. Notice it's similar to ㄅ but with an extra stroke.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄆ",
    pronunciation: "p",
    examples: "ㄆㄚ (pa) 爬爬 (pápá - to climb), ㄆㄛ (po) 婆婆 (pópo - grandmother), ㄆㄞ (pai) 排隊 (páiduì - line up), ㄆㄟ (pei) 朋友 (péngyǒu - friend)"
  },
  {
    order: 4,
    title: "ㄇ",
    content: "This symbol sounds like 'm' in English, as in 'mother' or 'moon'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄇ",
    pronunciation: "m",
    examples: "ㄇㄚ (ma) 媽媽 (māma - mother), ㄇㄛ (mo) 摸摸 (mōmō - to touch), ㄇㄞ (mai) 買賣 (mǎimài - trade), ㄇㄟ (mei) 美麗 (měilì - beautiful)"
  },
  {
    order: 5,
    title: "ㄈ",
    content: "This symbol sounds like 'f' in English, as in 'father' or 'fish'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄈ",
    pronunciation: "f",
    examples: "ㄈㄚ (fa) 發發 (fāfā - to send), ㄈㄛ (fo) 佛佛 (fófó - Buddha), ㄈㄞ (fai) 非常 (fēicháng - very), ㄈㄟ (fei) 飛機 (fēijī - airplane)"
  },
  # Group 2: Alveolars
  {
    order: 7,
    title: "ㄉ",
    content: "This symbol sounds like 'd' in English, as in 'dog' or 'day'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄉ",
    pronunciation: "d",
    examples: "ㄉㄚ (da) 大大 (dàdà - big), ㄉㄛ (do) 多朵 (duōduǒ - many), ㄉㄞ (dai) 帶帶 (dàidài - to bring), ㄉㄟ (dei) 得得 (děidéi - must)"
  },
  {
    order: 8,
    title: "ㄊ",
    content: "This symbol sounds like 't' in English, as in 'top' or 'tea'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄊ",
    pronunciation: "t",
    examples: "ㄊㄚ (ta) 他她 (tā - he/she), ㄊㄛ (to) 頭頭 (tóutóu - head), ㄊㄞ (tai) 台灣 (Táiwān - Taiwan), ㄊㄟ (tei) 特別 (tèbié - special)"
  },
  {
    order: 9,
    title: "ㄋ",
    content: "This symbol sounds like 'n' in English, as in 'no' or 'now'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄋ",
    pronunciation: "n",
    examples: "ㄋㄚ (na) 那那 (nà - that), ㄋㄛ (no) 諾諾 (nuònuò - promise), ㄋㄞ (nai) 奶奶 (nǎinai - grandmother), ㄋㄟ (nei) 內內 (nèinèi - inside)"
  },
  {
    order: 10,
    title: "ㄌ",
    content: "This symbol sounds like 'l' in English, as in 'love' or 'light'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄌ",
    pronunciation: "l",
    examples: "ㄌㄚ (la) 拉拉 (lālā - pull), ㄌㄛ (lo) 落落 (luòluò - to fall), ㄌㄞ (lai) 來來 (láilái - to come), ㄌㄟ (lei) 累累 (lèilèi - tired)"
  },
  # Group 3: Velars
  {
    order: 12,
    title: "ㄍ",
    content: "This symbol sounds like 'g' in English, as in 'go' or 'good'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄍ",
    pronunciation: "g",
    examples: "ㄍㄚ (ga) 嘎嘎 (gāgā - quack), ㄍㄛ (go) 哥哥 (gēge - older brother), ㄍㄞ (gai) 改變 (gǎibiàn - to change), ㄍㄟ (gei) 給給 (gěigěi - to give)"
  },
  {
    order: 13,
    title: "ㄎ",
    content: "This symbol sounds like 'k' in English, as in 'key' or 'cat'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄎ",
    pronunciation: "k",
    examples: "ㄎㄚ (ka) 卡卡 (kǎkǎ - card), ㄎㄛ (ko) 可可 (kěkě - cocoa), ㄎㄞ (kai) 開開 (kāikāi - to open), ㄎㄟ (kei) 看看 (kànkàn - to look)"
  },
  {
    order: 14,
    title: "ㄏ",
    content: "This symbol sounds like 'h' in English, as in 'hello' or 'house'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄏ",
    pronunciation: "h",
    examples: "ㄏㄚ (ha) 哈哈 (hāhā - haha), ㄏㄛ (ho) 和和 (héhé - and), ㄏㄞ (hai) 還還 (háihái - still), ㄏㄟ (hei) 黑黑 (hēihēi - black)"
  },
  # Group 4: Palatals
  {
    order: 16,
    title: "ㄐ",
    content: "This symbol sounds like 'j' in English, as in 'jeep'. It's similar to the 'j' sound but softer.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄐ",
    pronunciation: "ji",
    examples: "ㄐㄧ (ji) 雞雞 (jījī - chicken), ㄐㄧㄚ (jia) 家家 (jiājiā - home), ㄐㄧㄝ (jie) 姐姐 (jiějie - older sister), ㄐㄧㄠ (jiao) 教教 (jiāojiāo - to teach)"
  },
  {
    order: 17,
    title: "ㄑ",
    content: "This symbol sounds like 'ch' in English, as in 'cheese'. It's an aspirated version of ㄐ.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄑ",
    pronunciation: "qi",
    examples: "ㄑㄧ (qi) 七起 (qīqǐ - seven/rise), ㄑㄧㄚ (qia) 恰恰 (qiàqià - exactly), ㄑㄧㄝ (qie) 切切 (qiēqiē - to cut), ㄑㄧㄠ (qiao) 橋橋 (qiáoqiáo - bridge)"
  },
  {
    order: 18,
    title: "ㄒ",
    content: "This symbol sounds like 'sh' in English, as in 'sheep'. It's a fricative sound.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄒ",
    pronunciation: "xi",
    examples: "ㄒㄧ (xi) 西西 (xīxī - west), ㄒㄧㄚ (xia) 下下 (xiàxià - down), ㄒㄧㄝ (xie) 謝謝 (xièxie - thank you), ㄒㄧㄠ (xiao) 小小 (xiǎoxiǎo - small)"
  },
  # Group 5: Retroflexes
  {
    order: 20,
    title: "ㄓ",
    content: "This symbol sounds like 'zh' in English, as in 'measure'. It's a retroflex sound.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄓ",
    pronunciation: "zh",
    examples: "ㄓㄚ (zha) 查查 (cháchá - to check), ㄓㄜ (zhe) 這這 (zhèzhè - this), ㄓㄞ (zhai) 摘摘 (zhāizhāi - to pick), ㄓㄟ (zhei) 這這 (zhèizhèi - this)"
  },
  {
    order: 21,
    title: "ㄔ",
    content: "This symbol sounds like 'ch' in English, as in 'chair'. It's an aspirated retroflex.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄔ",
    pronunciation: "ch",
    examples: "ㄔㄚ (cha) 茶茶 (cháchá - tea), ㄔㄜ (che) 車車 (chēchē - car), ㄔㄞ (chai) 拆拆 (chāichāi - to tear), ㄔㄟ (chei) 吃吃 (chīchī - to eat)"
  },
  {
    order: 22,
    title: "ㄕ",
    content: "This symbol sounds like 'sh' in English, as in 'shoe'. It's a retroflex fricative.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄕ",
    pronunciation: "sh",
    examples: "ㄕㄚ (sha) 沙沙 (shāshā - sand), ㄕㄜ (she) 蛇蛇 (shéshé - snake), ㄕㄞ (shai) 曬曬 (shàishài - to sun), ㄕㄟ (shei) 誰誰 (shéishéi - who)"
  },
  {
    order: 23,
    title: "ㄖ",
    content: "This symbol sounds like 'r' in English, as in 'red'. It's a retroflex approximant.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄖ",
    pronunciation: "r",
    examples: "ㄖㄚ (ra) 熱熱 (rèrè - hot), ㄖㄜ (re) 熱熱 (rèrè - hot), ㄖㄞ (rai) 來來 (láilái - to come), ㄖㄟ (rei) 人人 (rénrén - person)"
  },
  # Group 6: Sibilants
  {
    order: 25,
    title: "ㄗ",
    content: "This symbol sounds like 'z' in English, as in 'zoo' or 'zero'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄗ",
    pronunciation: "zi",
    examples: "ㄗㄚ (za) 雜雜 (zázá - mixed), ㄗㄜ (ze) 則則 (zézé - then), ㄗㄞ (zai) 在在 (zàizài - at), ㄗㄟ (zei) 賊賊 (zéizéi - thief)"
  },
  {
    order: 26,
    title: "ㄘ",
    content: "This symbol sounds like 'ts' in English, as in 'cats'. It's an aspirated version of ㄗ.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄘ",
    pronunciation: "ci",
    examples: "ㄘㄚ (ca) 擦擦 (cācā - to wipe), ㄘㄜ (ce) 測測 (cècè - to measure), ㄘㄞ (cai) 菜菜 (càicài - vegetable), ㄘㄟ (cei) 猜猜 (cāicāi - to guess)"
  },
  {
    order: 27,
    title: "ㄙ",
    content: "This symbol sounds like 's' in English, as in 'sun' or 'see'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄙ",
    pronunciation: "si",
    examples: "ㄙㄚ (sa) 灑灑 (sǎsǎ - to sprinkle), ㄙㄜ (se) 色色 (sèsè - color), ㄙㄞ (sai) 賽賽 (sàisài - race), ㄙㄟ (sei) 歲歲 (suìsuì - year)"
  },
  # Finals (Vowels) - Group 1: Simple vowels
  {
    order: 30,
    title: "ㄚ",
    content: "This sounds like 'a' in English, as in 'father' or 'car'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄚ",
    pronunciation: "a",
    examples: "ㄅㄚ (ba) 爸爸 (bàba - father), ㄇㄚ (ma) 媽媽 (māma - mother), ㄈㄚ (fa) 發發 (fāfā - to send), ㄉㄚ (da) 大大 (dàdà - big)"
  },
  {
    order: 31,
    title: "ㄛ",
    content: "This sounds like 'o' in English, as in 'go' or 'so'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄛ",
    pronunciation: "o",
    examples: "ㄅㄛ (bo) 波波 (bōbō - wave), ㄆㄛ (po) 婆婆 (pópo - grandmother), ㄇㄛ (mo) 摸摸 (mōmō - to touch), ㄈㄛ (fo) 佛佛 (fófó - Buddha)"
  },
  {
    order: 32,
    title: "ㄜ",
    content: "This sounds like 'e' in English, as in 'her' or 'bird'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄜ",
    pronunciation: "e",
    examples: "ㄅㄜ (be) 伯伯 (bóbo - uncle), ㄆㄜ (pe) 婆婆 (pópo - grandmother), ㄇㄜ (me) 麼麼 (meme - what), ㄈㄜ (fe) 佛佛 (fófó - Buddha)"
  },
  {
    order: 33,
    title: "ㄝ",
    content: "This sounds like 'e' in English, as in 'bed'. It's a different 'e' sound from ㄜ.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄝ",
    pronunciation: "e",
    examples: "ㄅㄝ (bie) 別別 (biébié - don't), ㄆㄝ (pie) 撇撇 (piěpiě - to throw), ㄇㄝ (mie) 滅滅 (mièmiè - to extinguish), ㄈㄝ (fie) 非非 (fēifēi - not)"
  },
  # Group 2: Diphthongs
  {
    order: 35,
    title: "ㄞ",
    content: "This sounds like 'ai' in English, as in 'eye' or 'buy'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄞ",
    pronunciation: "ai",
    examples: "ㄅㄞ (bai) 白色 (báisè - white), ㄆㄞ (pai) 排隊 (páiduì - line up), ㄇㄞ (mai) 買賣 (mǎimài - trade), ㄈㄞ (fai) 非常 (fēicháng - very)"
  },
  {
    order: 36,
    title: "ㄟ",
    content: "This sounds like 'ei' in English, as in 'way' or 'say'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄟ",
    pronunciation: "ei",
    examples: "ㄅㄟ (bei) 杯子 (bēizi - cup), ㄆㄟ (pei) 朋友 (péngyǒu - friend), ㄇㄟ (mei) 美麗 (měilì - beautiful), ㄈㄟ (fei) 飛機 (fēijī - airplane)"
  },
  {
    order: 37,
    title: "ㄠ",
    content: "This sounds like 'ao' in English, as in 'cow' or 'how'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄠ",
    pronunciation: "ao",
    examples: "ㄅㄠ (bao) 包包 (bāobāo - bag), ㄆㄠ (pao) 跑跑 (pǎopǎo - to run), ㄇㄠ (mao) 貓貓 (māomāo - cat), ㄈㄠ (fao) 方法 (fāngfǎ - method)"
  },
  {
    order: 38,
    title: "ㄡ",
    content: "This sounds like 'ou' in English, as in 'go' or 'show'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄡ",
    pronunciation: "ou",
    examples: "ㄅㄡ (bou) 包包 (bāobāo - bag), ㄆㄡ (pou) 朋友 (péngyǒu - friend), ㄇㄡ (mou) 某某 (mǒumǒu - some), ㄈㄡ (fou) 否否 (fǒufǒu - no)"
  },
  # Group 3: Nasal endings
  {
    order: 40,
    title: "ㄢ",
    content: "This sounds like 'an' in English, as in 'can' or 'man'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄢ",
    pronunciation: "an",
    examples: "ㄅㄢ (ban) 班班 (bānbān - class), ㄆㄢ (pan) 盤盤 (pánpán - plate), ㄇㄢ (man) 慢慢 (mànmàn - slow), ㄈㄢ (fan) 飯飯 (fànfàn - rice)"
  },
  {
    order: 41,
    title: "ㄣ",
    content: "This sounds like 'en' in English, as in 'pen' or 'ten'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄣ",
    pronunciation: "en",
    examples: "ㄅㄣ (ben) 本本 (běnběn - book), ㄆㄣ (pen) 盆盆 (pénpén - basin), ㄇㄣ (men) 門門 (ménmén - door), ㄈㄣ (fen) 分分 (fēnfēn - to divide)"
  },
  {
    order: 42,
    title: "ㄤ",
    content: "This sounds like 'ang' in English, as in 'song' or 'long'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄤ",
    pronunciation: "ang",
    examples: "ㄅㄤ (bang) 幫幫 (bāngbāng - to help), ㄆㄤ (pang) 胖胖 (pàngpàng - fat), ㄇㄤ (mang) 忙忙 (mángmáng - busy), ㄈㄤ (fang) 方法 (fāngfǎ - method)"
  },
  {
    order: 43,
    title: "ㄥ",
    content: "This sounds like 'eng' in English, as in 'sing' or 'ring'.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄥ",
    pronunciation: "eng",
    examples: "ㄅㄥ (beng) 崩崩 (bēngbēng - to collapse), ㄆㄥ (peng) 朋友 (péngyǒu - friend), ㄇㄥ (meng) 夢夢 (mèngmèng - dream), ㄈㄥ (feng) 風風 (fēngfēng - wind)"
  },
  # Group 4: Special finals
  {
    order: 45,
    title: "ㄦ",
    content: "This sounds like 'er' in English, as in 'her' or 'teacher'. It's a retroflex vowel.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄦ",
    pronunciation: "er",
    examples: "ㄦ (er) 兒兒 (érér - child), 耳朵 (ěrdǒu - ear), 二二 (èrèr - two)"
  },
  {
    order: 46,
    title: "ㄧ",
    content: "This sounds like 'i' in English, as in 'see' or 'me'. It can also be used as a medial.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄧ",
    pronunciation: "yi",
    examples: "ㄧ (yi) 一一 (yīyī - one), ㄅㄧ (bi) 筆筆 (bǐbǐ - pen), ㄆㄧ (pi) 皮皮 (pípí - skin), ㄇㄧ (mi) 米米 (mǐmǐ - rice)"
  },
  {
    order: 47,
    title: "ㄨ",
    content: "This sounds like 'u' in English, as in 'you' or 'blue'. It can also be used as a medial.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄨ",
    pronunciation: "wu",
    examples: "ㄨ (wu) 五五 (wǔwǔ - five), ㄅㄨ (bu) 不不 (bùbù - no), ㄆㄨ (pu) 普普 (pǔpǔ - common), ㄇㄨ (mu) 木木 (mùmù - wood)"
  },
  {
    order: 48,
    title: "ㄩ",
    content: "This sounds like 'ü' (a rounded 'i' sound), as in the German 'ü'. It can also be used as a medial.",
    lesson_type: "symbol",
    bpmf_symbol: "ㄩ",
    pronunciation: "yu",
    examples: "ㄩ (yu) 雨雨 (yǔyǔ - rain), ㄐㄩ (ju) 句句 (jùjù - sentence), ㄑㄩ (qu) 去去 (qùqù - to go), ㄒㄩ (xu) 學學 (xuéxué - to learn)"
  },
  {
    order: 39,
    title: "🎉 Complete BPMF System!",
    content: "Congratulations! You've learned the complete BPMF (Zhuyin) phonetic system! You now know all 37 characters: 21 initials and 16 finals. You can now read and pronounce any Chinese character using BPMF!",
    lesson_type: "introduction",
    bpmf_symbol: nil,
    pronunciation: nil,
    examples: "Complete system: ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦㄧㄨㄩ"
  }
]

# Create Level 1 lessons (all existing lessons)
lessons_data.each do |lesson_data|
  Lesson.create!(lesson_data.merge(level: 1))
end

puts "Created #{Lesson.count} Level 1 lessons!"

# Level 2: Keyboard Layout Practice - Common Combinations
level_2_lessons = [
  {
    order: 52,
    level: 2,
    title: "Level 2: Introduction to BPMF Keyboard",
    content: "Welcome to Level 2! Now that you know all the BPMF symbols, let's practice using them on a keyboard layout like you'd find on smartphones. You'll see a BPMF keyboard and need to type the correct symbols for given sounds.",
    lesson_type: "introduction",
    bpmf_symbol: nil,
    pronunciation: nil,
    examples: nil
  },
  # Common combinations - frequently used syllables in Mandarin
  {
    order: 53,
    level: 2,
    title: "Keyboard Practice: ba",
    content: "Practice typing: 'ba'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄅㄚ",
    pronunciation: "ba",
    examples: "Type 'ba' (ㄅㄚ) on the keyboard"
  },
  # Common combinations - frequently used syllables in Mandarin
  {
    order: 54,
    level: 2,
    title: "Keyboard Practice: ma",
    content: "Practice typing: 'ma'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄇㄚ",
    pronunciation: "ma",
    examples: "Type 'ma' (ㄇㄚ) on the keyboard"
  },
  # Curated list of common, meaningful combinations
  {
    order: 55,
    level: 2,
    title: "Keyboard Practice: zhi",
    content: "Practice typing: 'zhi'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄓ",
    pronunciation: "zhi",
    examples: "Type 'zhi' (ㄓ) on the keyboard"
  },
  # Curated list of common, meaningful combinations (100 total)
  {
    order: 56,
    level: 2,
    title: "Keyboard Practice: chi",
    content: "Practice typing: 'chi'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄔ",
    pronunciation: "chi",
    examples: "Type 'chi' (ㄔ) on the keyboard"
  },
  {
    order: 57,
    level: 2,
    title: "Keyboard Practice: shi",
    content: "Practice typing: 'shi'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄕ",
    pronunciation: "shi",
    examples: "Type 'shi' (ㄕ) on the keyboard"
  },
  {
    order: 58,
    level: 2,
    title: "Keyboard Practice: ri",
    content: "Practice typing: 'ri'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄖ",
    pronunciation: "ri",
    examples: "Type 'ri' (ㄖ) on the keyboard"
  },
  {
    order: 59,
    level: 2,
    title: "Keyboard Practice: zi",
    content: "Practice typing: 'zi'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄗ",
    pronunciation: "zi",
    examples: "Type 'zi' (ㄗ) on the keyboard"
  },
  {
    order: 60,
    level: 2,
    title: "Keyboard Practice: ci",
    content: "Practice typing: 'ci'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄘ",
    pronunciation: "ci",
    examples: "Type 'ci' (ㄘ) on the keyboard"
  },
  {
    order: 61,
    level: 2,
    title: "Keyboard Practice: si",
    content: "Practice typing: 'si'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄙ",
    pronunciation: "si",
    examples: "Type 'si' (ㄙ) on the keyboard"
  },
  {
    order: 62,
    level: 2,
    title: "Keyboard Practice: zhe",
    content: "Practice typing: 'zhe'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄓㄜ",
    pronunciation: "zhe",
    examples: "Type 'zhe' (ㄓㄜ) on the keyboard"
  },
  {
    order: 63,
    level: 2,
    title: "Keyboard Practice: che",
    content: "Practice typing: 'che'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄔㄜ",
    pronunciation: "che",
    examples: "Type 'che' (ㄔㄜ) on the keyboard"
  },
  {
    order: 64,
    level: 2,
    title: "Keyboard Practice: she",
    content: "Practice typing: 'she'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄕㄜ",
    pronunciation: "she",
    examples: "Type 'she' (ㄕㄜ) on the keyboard"
  },
  {
    order: 65,
    level: 2,
    title: "Keyboard Practice: re",
    content: "Practice typing: 're'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄖㄜ",
    pronunciation: "re",
    examples: "Type 're' (ㄖㄜ) on the keyboard"
  },
  {
    order: 66,
    level: 2,
    title: "Keyboard Practice: zai",
    content: "Practice typing: 'zai'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄗㄞ",
    pronunciation: "zai",
    examples: "Type 'zai' (ㄗㄞ) on the keyboard"
  },
  {
    order: 67,
    level: 2,
    title: "Keyboard Practice: lai",
    content: "Practice typing: 'lai'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄌㄞ",
    pronunciation: "lai",
    examples: "Type 'lai' (ㄌㄞ) on the keyboard"
  },
  {
    order: 68,
    level: 2,
    title: "Keyboard Practice: hai",
    content: "Practice typing: 'hai'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄏㄞ",
    pronunciation: "hai",
    examples: "Type 'hai' (ㄏㄞ) on the keyboard"
  },
  {
    order: 69,
    level: 2,
    title: "Keyboard Practice: zhao",
    content: "Practice typing: 'zhao'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄓㄠ",
    pronunciation: "zhao",
    examples: "Type 'zhao' (ㄓㄠ) on the keyboard"
  },
  {
    order: 70,
    level: 2,
    title: "Keyboard Practice: chao",
    content: "Practice typing: 'chao'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄔㄠ",
    pronunciation: "chao",
    examples: "Type 'chao' (ㄔㄠ) on the keyboard"
  },
  {
    order: 71,
    level: 2,
    title: "Keyboard Practice: shao",
    content: "Practice typing: 'shao'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄕㄠ",
    pronunciation: "shao",
    examples: "Type 'shao' (ㄕㄠ) on the keyboard"
  },
  {
    order: 72,
    level: 2,
    title: "Keyboard Practice: zhang",
    content: "Practice typing: 'zhang'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄓㄤ",
    pronunciation: "zhang",
    examples: "Type 'zhang' (ㄓㄤ) on the keyboard"
  },
  {
    order: 73,
    level: 2,
    title: "Keyboard Practice: chang",
    content: "Practice typing: 'chang'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄔㄤ",
    pronunciation: "chang",
    examples: "Type 'chang' (ㄔㄤ) on the keyboard"
  },
  {
    order: 74,
    level: 2,
    title: "Keyboard Practice: shang",
    content: "Practice typing: 'shang'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄕㄤ",
    pronunciation: "shang",
    examples: "Type 'shang' (ㄕㄤ) on the keyboard"
  },
  {
    order: 75,
    level: 2,
    title: "Keyboard Practice: zhen",
    content: "Practice typing: 'zhen'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄓㄣ",
    pronunciation: "zhen",
    examples: "Type 'zhen' (ㄓㄣ) on the keyboard"
  },
  {
    order: 76,
    level: 2,
    title: "Keyboard Practice: chen",
    content: "Practice typing: 'chen'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄔㄣ",
    pronunciation: "chen",
    examples: "Type 'chen' (ㄔㄣ) on the keyboard"
  },
  {
    order: 77,
    level: 2,
    title: "Keyboard Practice: shen",
    content: "Practice typing: 'shen'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄕㄣ",
    pronunciation: "shen",
    examples: "Type 'shen' (ㄕㄣ) on the keyboard"
  },
  {
    order: 78,
    level: 2,
    title: "Keyboard Practice: ren",
    content: "Practice typing: 'ren'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄖㄣ",
    pronunciation: "ren",
    examples: "Type 'ren' (ㄖㄣ) on the keyboard"
  },
  {
    order: 79,
    level: 2,
    title: "Keyboard Practice: zheng",
    content: "Practice typing: 'zheng'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄓㄥ",
    pronunciation: "zheng",
    examples: "Type 'zheng' (ㄓㄥ) on the keyboard"
  },
  {
    order: 80,
    level: 2,
    title: "Keyboard Practice: cheng",
    content: "Practice typing: 'cheng'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄔㄥ",
    pronunciation: "cheng",
    examples: "Type 'cheng' (ㄔㄥ) on the keyboard"
  },
  {
    order: 81,
    level: 2,
    title: "Keyboard Practice: sheng",
    content: "Practice typing: 'sheng'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄕㄥ",
    pronunciation: "sheng",
    examples: "Type 'sheng' (ㄕㄥ) on the keyboard"
  },
  {
    order: 82,
    level: 2,
    title: "Keyboard Practice: bu",
    content: "Practice typing: 'bu'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄅㄨ",
    pronunciation: "bu",
    examples: "Type 'bu' (ㄅㄨ) on the keyboard"
  },
  {
    order: 83,
    level: 2,
    title: "Keyboard Practice: du",
    content: "Practice typing: 'du'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄉㄨ",
    pronunciation: "du",
    examples: "Type 'du' (ㄉㄨ) on the keyboard"
  },
  {
    order: 84,
    level: 2,
    title: "Keyboard Practice: tu",
    content: "Practice typing: 'tu'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄊㄨ",
    pronunciation: "tu",
    examples: "Type 'tu' (ㄊㄨ) on the keyboard"
  },
  {
    order: 85,
    level: 2,
    title: "Keyboard Practice: nu",
    content: "Practice typing: 'nu'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄋㄨ",
    pronunciation: "nu",
    examples: "Type 'nu' (ㄋㄨ) on the keyboard"
  },
  {
    order: 86,
    level: 2,
    title: "Keyboard Practice: lu",
    content: "Practice typing: 'lu'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄌㄨ",
    pronunciation: "lu",
    examples: "Type 'lu' (ㄌㄨ) on the keyboard"
  },
  {
    order: 87,
    level: 2,
    title: "Keyboard Practice: gu",
    content: "Practice typing: 'gu'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄍㄨ",
    pronunciation: "gu",
    examples: "Type 'gu' (ㄍㄨ) on the keyboard"
  },
  {
    order: 88,
    level: 2,
    title: "Keyboard Practice: ku",
    content: "Practice typing: 'ku'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄎㄨ",
    pronunciation: "ku",
    examples: "Type 'ku' (ㄎㄨ) on the keyboard"
  },
  {
    order: 89,
    level: 2,
    title: "Keyboard Practice: hu",
    content: "Practice typing: 'hu'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄏㄨ",
    pronunciation: "hu",
    examples: "Type 'hu' (ㄏㄨ) on the keyboard"
  },
  {
    order: 90,
    level: 2,
    title: "Keyboard Practice: zhu",
    content: "Practice typing: 'zhu'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄓㄨ",
    pronunciation: "zhu",
    examples: "Type 'zhu' (ㄓㄨ) on the keyboard"
  },
  {
    order: 91,
    level: 2,
    title: "Keyboard Practice: chu",
    content: "Practice typing: 'chu'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄔㄨ",
    pronunciation: "chu",
    examples: "Type 'chu' (ㄔㄨ) on the keyboard"
  },
  {
    order: 92,
    level: 2,
    title: "Keyboard Practice: shu",
    content: "Practice typing: 'shu'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄕㄨ",
    pronunciation: "shu",
    examples: "Type 'shu' (ㄕㄨ) on the keyboard"
  },
  {
    order: 93,
    level: 2,
    title: "Keyboard Practice: ru",
    content: "Practice typing: 'ru'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄖㄨ",
    pronunciation: "ru",
    examples: "Type 'ru' (ㄖㄨ) on the keyboard"
  },
  {
    order: 94,
    level: 2,
    title: "Keyboard Practice: zu",
    content: "Practice typing: 'zu'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄗㄨ",
    pronunciation: "zu",
    examples: "Type 'zu' (ㄗㄨ) on the keyboard"
  },
  {
    order: 95,
    level: 2,
    title: "Keyboard Practice: cu",
    content: "Practice typing: 'cu'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄘㄨ",
    pronunciation: "cu",
    examples: "Type 'cu' (ㄘㄨ) on the keyboard"
  },
  {
    order: 96,
    level: 2,
    title: "Keyboard Practice: su",
    content: "Practice typing: 'su'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄙㄨ",
    pronunciation: "su",
    examples: "Type 'su' (ㄙㄨ) on the keyboard"
  },
  {
    order: 97,
    level: 2,
    title: "Keyboard Practice: ju",
    content: "Practice typing: 'ju'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄐㄩ",
    pronunciation: "ju",
    examples: "Type 'ju' (ㄐㄩ) on the keyboard"
  },
  {
    order: 98,
    level: 2,
    title: "Keyboard Practice: qu",
    content: "Practice typing: 'qu'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄑㄩ",
    pronunciation: "qu",
    examples: "Type 'qu' (ㄑㄩ) on the keyboard"
  },
  {
    order: 99,
    level: 2,
    title: "Keyboard Practice: xu",
    content: "Practice typing: 'xu'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄒㄩ",
    pronunciation: "xu",
    examples: "Type 'xu' (ㄒㄩ) on the keyboard"
  },
  {
    order: 100,
    level: 2,
    title: "Keyboard Practice: ji",
    content: "Practice typing: 'ji'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄐㄧ",
    pronunciation: "ji",
    examples: "Type 'ji' (ㄐㄧ) on the keyboard"
  },
  {
    order: 101,
    level: 2,
    title: "Keyboard Practice: qi",
    content: "Practice typing: 'qi'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄑㄧ",
    pronunciation: "qi",
    examples: "Type 'qi' (ㄑㄧ) on the keyboard"
  },
  {
    order: 102,
    level: 2,
    title: "Keyboard Practice: xi",
    content: "Practice typing: 'xi'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄒㄧ",
    pronunciation: "xi",
    examples: "Type 'xi' (ㄒㄧ) on the keyboard"
  },
  {
    order: 103,
    level: 2,
    title: "Keyboard Practice: de",
    content: "Practice typing: 'de'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄉㄜ",
    pronunciation: "de",
    examples: "Type 'de' (ㄉㄜ) on the keyboard"
  },
  {
    order: 104,
    level: 2,
    title: "Keyboard Practice: le",
    content: "Practice typing: 'le'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄌㄜ",
    pronunciation: "le",
    examples: "Type 'le' (ㄌㄜ) on the keyboard"
  },
  {
    order: 105,
    level: 2,
    title: "Keyboard Practice: ge",
    content: "Practice typing: 'ge'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄍㄜ",
    pronunciation: "ge",
    examples: "Type 'ge' (ㄍㄜ) on the keyboard"
  },
  {
    order: 106,
    level: 2,
    title: "Keyboard Practice: ke",
    content: "Practice typing: 'ke'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄎㄜ",
    pronunciation: "ke",
    examples: "Type 'ke' (ㄎㄜ) on the keyboard"
  },
  {
    order: 107,
    level: 2,
    title: "Keyboard Practice: he",
    content: "Practice typing: 'he'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄏㄜ",
    pronunciation: "he",
    examples: "Type 'he' (ㄏㄜ) on the keyboard"
  },
  {
    order: 108,
    level: 2,
    title: "Keyboard Practice: mei",
    content: "Practice typing: 'mei'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄇㄟ",
    pronunciation: "mei",
    examples: "Type 'mei' (ㄇㄟ) on the keyboard"
  },
  {
    order: 109,
    level: 2,
    title: "Keyboard Practice: fei",
    content: "Practice typing: 'fei'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄈㄟ",
    pronunciation: "fei",
    examples: "Type 'fei' (ㄈㄟ) on the keyboard"
  },
  {
    order: 110,
    level: 2,
    title: "Keyboard Practice: bei",
    content: "Practice typing: 'bei'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄅㄟ",
    pronunciation: "bei",
    examples: "Type 'bei' (ㄅㄟ) on the keyboard"
  },
  {
    order: 111,
    level: 2,
    title: "Keyboard Practice: pei",
    content: "Practice typing: 'pei'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄆㄟ",
    pronunciation: "pei",
    examples: "Type 'pei' (ㄆㄟ) on the keyboard"
  },
  {
    order: 112,
    level: 2,
    title: "Keyboard Practice: dao",
    content: "Practice typing: 'dao'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄉㄠ",
    pronunciation: "dao",
    examples: "Type 'dao' (ㄉㄠ) on the keyboard"
  },
  {
    order: 113,
    level: 2,
    title: "Keyboard Practice: tao",
    content: "Practice typing: 'tao'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄊㄠ",
    pronunciation: "tao",
    examples: "Type 'tao' (ㄊㄠ) on the keyboard"
  },
  {
    order: 114,
    level: 2,
    title: "Keyboard Practice: nao",
    content: "Practice typing: 'nao'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄋㄠ",
    pronunciation: "nao",
    examples: "Type 'nao' (ㄋㄠ) on the keyboard"
  },
  {
    order: 115,
    level: 2,
    title: "Keyboard Practice: lao",
    content: "Practice typing: 'lao'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄌㄠ",
    pronunciation: "lao",
    examples: "Type 'lao' (ㄌㄠ) on the keyboard"
  },
  {
    order: 116,
    level: 2,
    title: "Keyboard Practice: gao",
    content: "Practice typing: 'gao'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄍㄠ",
    pronunciation: "gao",
    examples: "Type 'gao' (ㄍㄠ) on the keyboard"
  },
  {
    order: 117,
    level: 2,
    title: "Keyboard Practice: hao",
    content: "Practice typing: 'hao'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄏㄠ",
    pronunciation: "hao",
    examples: "Type 'hao' (ㄏㄠ) on the keyboard"
  },
  {
    order: 118,
    level: 2,
    title: "Keyboard Practice: ban",
    content: "Practice typing: 'ban'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄅㄢ",
    pronunciation: "ban",
    examples: "Type 'ban' (ㄅㄢ) on the keyboard"
  },
  {
    order: 119,
    level: 2,
    title: "Keyboard Practice: pan",
    content: "Practice typing: 'pan'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄆㄢ",
    pronunciation: "pan",
    examples: "Type 'pan' (ㄆㄢ) on the keyboard"
  },
  {
    order: 120,
    level: 2,
    title: "Keyboard Practice: man",
    content: "Practice typing: 'man'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄇㄢ",
    pronunciation: "man",
    examples: "Type 'man' (ㄇㄢ) on the keyboard"
  },
  {
    order: 121,
    level: 2,
    title: "Keyboard Practice: fan",
    content: "Practice typing: 'fan'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄈㄢ",
    pronunciation: "fan",
    examples: "Type 'fan' (ㄈㄢ) on the keyboard"
  },
  {
    order: 122,
    level: 2,
    title: "Keyboard Practice: dan",
    content: "Practice typing: 'dan'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄉㄢ",
    pronunciation: "dan",
    examples: "Type 'dan' (ㄉㄢ) on the keyboard"
  },
  {
    order: 123,
    level: 2,
    title: "Keyboard Practice: tan",
    content: "Practice typing: 'tan'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄊㄢ",
    pronunciation: "tan",
    examples: "Type 'tan' (ㄊㄢ) on the keyboard"
  },
  {
    order: 124,
    level: 2,
    title: "Keyboard Practice: nan",
    content: "Practice typing: 'nan'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄋㄢ",
    pronunciation: "nan",
    examples: "Type 'nan' (ㄋㄢ) on the keyboard"
  },
  {
    order: 125,
    level: 2,
    title: "Keyboard Practice: lan",
    content: "Practice typing: 'lan'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄌㄢ",
    pronunciation: "lan",
    examples: "Type 'lan' (ㄌㄢ) on the keyboard"
  },
  {
    order: 126,
    level: 2,
    title: "Keyboard Practice: gan",
    content: "Practice typing: 'gan'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄍㄢ",
    pronunciation: "gan",
    examples: "Type 'gan' (ㄍㄢ) on the keyboard"
  },
  {
    order: 127,
    level: 2,
    title: "Keyboard Practice: han",
    content: "Practice typing: 'han'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄏㄢ",
    pronunciation: "han",
    examples: "Type 'han' (ㄏㄢ) on the keyboard"
  },
  {
    order: 128,
    level: 2,
    title: "Keyboard Practice: ben",
    content: "Practice typing: 'ben'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄅㄣ",
    pronunciation: "ben",
    examples: "Type 'ben' (ㄅㄣ) on the keyboard"
  },
  {
    order: 129,
    level: 2,
    title: "Keyboard Practice: pen",
    content: "Practice typing: 'pen'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄆㄣ",
    pronunciation: "pen",
    examples: "Type 'pen' (ㄆㄣ) on the keyboard"
  },
  {
    order: 130,
    level: 2,
    title: "Keyboard Practice: men",
    content: "Practice typing: 'men'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄇㄣ",
    pronunciation: "men",
    examples: "Type 'men' (ㄇㄣ) on the keyboard"
  },
  {
    order: 131,
    level: 2,
    title: "Keyboard Practice: fen",
    content: "Practice typing: 'fen'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄈㄣ",
    pronunciation: "fen",
    examples: "Type 'fen' (ㄈㄣ) on the keyboard"
  },
  {
    order: 132,
    level: 2,
    title: "Keyboard Practice: gen",
    content: "Practice typing: 'gen'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄍㄣ",
    pronunciation: "gen",
    examples: "Type 'gen' (ㄍㄣ) on the keyboard"
  },
  {
    order: 133,
    level: 2,
    title: "Keyboard Practice: hen",
    content: "Practice typing: 'hen'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄏㄣ",
    pronunciation: "hen",
    examples: "Type 'hen' (ㄏㄣ) on the keyboard"
  },
  {
    order: 134,
    level: 2,
    title: "Keyboard Practice: bang",
    content: "Practice typing: 'bang'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄅㄤ",
    pronunciation: "bang",
    examples: "Type 'bang' (ㄅㄤ) on the keyboard"
  },
  {
    order: 135,
    level: 2,
    title: "Keyboard Practice: pang",
    content: "Practice typing: 'pang'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄆㄤ",
    pronunciation: "pang",
    examples: "Type 'pang' (ㄆㄤ) on the keyboard"
  },
  {
    order: 136,
    level: 2,
    title: "Keyboard Practice: mang",
    content: "Practice typing: 'mang'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄇㄤ",
    pronunciation: "mang",
    examples: "Type 'mang' (ㄇㄤ) on the keyboard"
  }
]
    content: "Practice typing: 'dang'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄉㄤ",
    pronunciation: "dang",
    examples: "Type 'dang' (ㄉㄤ) on the keyboard"
  },
  {
    order: 139,
    level: 2,
    title: "Keyboard Practice: tang",
    content: "Practice typing: 'tang'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄊㄤ",
    pronunciation: "tang",
    examples: "Type 'tang' (ㄊㄤ) on the keyboard"
  },
  {
    order: 140,
    level: 2,
    title: "Keyboard Practice: nang",
    content: "Practice typing: 'nang'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄋㄤ",
    pronunciation: "nang",
    examples: "Type 'nang' (ㄋㄤ) on the keyboard"
  },
  {
    order: 141,
    level: 2,
    title: "Keyboard Practice: lang",
    content: "Practice typing: 'lang'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄌㄤ",
    pronunciation: "lang",
    examples: "Type 'lang' (ㄌㄤ) on the keyboard"
  },
  {
    order: 142,
    level: 2,
    title: "Keyboard Practice: gang",
    content: "Practice typing: 'gang'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄍㄤ",
    pronunciation: "gang",
    examples: "Type 'gang' (ㄍㄤ) on the keyboard"
  },
  {
    order: 143,
    level: 2,
    title: "Keyboard Practice: kang",
    content: "Practice typing: 'kang'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄎㄤ",
    pronunciation: "kang",
    examples: "Type 'kang' (ㄎㄤ) on the keyboard"
  },
  {
    order: 144,
    level: 2,
    title: "Keyboard Practice: hang",
    content: "Practice typing: 'hang'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄏㄤ",
    pronunciation: "hang",
    examples: "Type 'hang' (ㄏㄤ) on the keyboard"
  },
  {
    order: 145,
    level: 2,
    title: "Keyboard Practice: beng",
    content: "Practice typing: 'beng'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄅㄥ",
    pronunciation: "beng",
    examples: "Type 'beng' (ㄅㄥ) on the keyboard"
  },
  {
    order: 146,
    level: 2,
    title: "Keyboard Practice: peng",
    content: "Practice typing: 'peng'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄆㄥ",
    pronunciation: "peng",
    examples: "Type 'peng' (ㄆㄥ) on the keyboard"
  },
  {
    order: 147,
    level: 2,
    title: "Keyboard Practice: meng",
    content: "Practice typing: 'meng'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄇㄥ",
    pronunciation: "meng",
    examples: "Type 'meng' (ㄇㄥ) on the keyboard"
  },
  {
    order: 148,
    level: 2,
    title: "Keyboard Practice: feng",
    content: "Practice typing: 'feng'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄈㄥ",
    pronunciation: "feng",
    examples: "Type 'feng' (ㄈㄥ) on the keyboard"
  },
  {
    order: 149,
    level: 2,
    title: "Keyboard Practice: deng",
    content: "Practice typing: 'deng'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄉㄥ",
    pronunciation: "deng",
    examples: "Type 'deng' (ㄉㄥ) on the keyboard"
  },
  {
    order: 150,
    level: 2,
    title: "Keyboard Practice: teng",
    content: "Practice typing: 'teng'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄊㄥ",
    pronunciation: "teng",
    examples: "Type 'teng' (ㄊㄥ) on the keyboard"
  },
  {
    order: 151,
    level: 2,
    title: "Keyboard Practice: neng",
    content: "Practice typing: 'neng'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄋㄥ",
    pronunciation: "neng",
    examples: "Type 'neng' (ㄋㄥ) on the keyboard"
  },
  {
    order: 152,
    level: 2,
    title: "Keyboard Practice: leng",
    content: "Practice typing: 'leng'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄌㄥ",
    pronunciation: "leng",
    examples: "Type 'leng' (ㄌㄥ) on the keyboard"
  },
  {
    order: 153,
    level: 2,
    title: "Keyboard Practice: geng",
    content: "Practice typing: 'geng'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄍㄥ",
    pronunciation: "geng",
    examples: "Type 'geng' (ㄍㄥ) on the keyboard"
  },
  {
    order: 154,
    level: 2,
    title: "Keyboard Practice: keng",
    content: "Practice typing: 'keng'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄎㄥ",
    pronunciation: "keng",
    examples: "Type 'keng' (ㄎㄥ) on the keyboard"
  },
  {
    order: 155,
    level: 2,
    title: "Keyboard Practice: heng",
    content: "Practice typing: 'heng'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄏㄥ",
    pronunciation: "heng",
    examples: "Type 'heng' (ㄏㄥ) on the keyboard"
  }
]

level_2_lessons.each do |lesson_data|
  Lesson.create!(lesson_data)
end

puts "Created #{Lesson.by_level(2).count} Level 2 lessons!"

# Level 3: Combining BPMF with Tone Marks
level_3_lessons = [
  {
    order: 232,
    level: 3,
    title: "Level 3: Combining BPMF with Tone Marks",
    content: "Welcome to Level 3! Now you'll learn to combine BPMF symbols with tone marks to create complete Mandarin words. Mandarin has 4 tones (plus neutral), and tone marks are essential for correct pronunciation.",
    lesson_type: "introduction",
    bpmf_symbol: nil,
    pronunciation: nil,
    examples: nil
  },
  {
    order: 233,
    level: 3,
    title: "Tone Practice: mā (First Tone)",
    content: "Practice first tone (ˉ) - high and flat.",
    lesson_type: "tone",
    bpmf_symbol: "ㄇㄚ",
    pronunciation: "mā",
    examples: "媽媽 (māma - mother)"
  },
  {
    order: 234,
    level: 3,
    title: "Tone Practice: má (Second Tone)",
    content: "Practice second tone (ˊ) - rises from middle to high.",
    lesson_type: "tone",
    bpmf_symbol: "ㄇㄚ",
    pronunciation: "má",
    examples: "麻 (má - hemp)"
  },
  {
    order: 235,
    level: 3,
    title: "Tone Practice: mǎ (Third Tone)",
    content: "Practice third tone (ˇ) - dips down then rises.",
    lesson_type: "tone",
    bpmf_symbol: "ㄇㄚ",
    pronunciation: "mǎ",
    examples: "馬 (mǎ - horse)"
  },
  {
    order: 236,
    level: 3,
    title: "Tone Practice: mà (Fourth Tone)",
    content: "Practice fourth tone (ˋ) - falls sharply from high to low.",
    lesson_type: "tone",
    bpmf_symbol: "ㄇㄚ",
    pronunciation: "mà",
    examples: "罵 (mà - to scold)"
  },
  {
    order: 237,
    level: 3,
    title: "Tone Practice: bā (First Tone)",
    content: "Practice first tone with 'ba'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄅㄚ",
    pronunciation: "bā",
    examples: "八 (bā - eight)"
  },
  {
    order: 238,
    level: 3,
    title: "Tone Practice: bá (Second Tone)",
    content: "Practice second tone with 'ba'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄅㄚ",
    pronunciation: "bá",
    examples: "拔 (bá - to pull)"
  },
  {
    order: 239,
    level: 3,
    title: "Tone Practice: bǎ (Third Tone)",
    content: "Practice third tone with 'ba'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄅㄚ",
    pronunciation: "bǎ",
    examples: "把 (bǎ - to hold)"
  },
  {
    order: 240,
    level: 3,
    title: "Tone Practice: bà (Fourth Tone)",
    content: "Practice fourth tone with 'ba'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄅㄚ",
    pronunciation: "bà",
    examples: "爸 (bà - father)"
  },
  {
    order: 241,
    level: 3,
    title: "Tone Practice: dā (First Tone)",
    content: "Practice first tone with 'da'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄉㄚ",
    pronunciation: "dā",
    examples: "搭 (dā - to take)"
  },
  {
    order: 242,
    level: 3,
    title: "Tone Practice: dá (Second Tone)",
    content: "Practice second tone with 'da'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄉㄚ",
    pronunciation: "dá",
    examples: "答 (dá - to answer)"
  },
  {
    order: 243,
    level: 3,
    title: "Tone Practice: dǎ (Third Tone)",
    content: "Practice third tone with 'da'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄉㄚ",
    pronunciation: "dǎ",
    examples: "打 (dǎ - to hit)"
  },
  {
    order: 244,
    level: 3,
    title: "Tone Practice: dà (Fourth Tone)",
    content: "Practice fourth tone with 'da'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄉㄚ",
    pronunciation: "dà",
    examples: "大 (dà - big)"
  },
  {
    order: 245,
    level: 3,
    title: "Tone Practice: gē (First Tone)",
    content: "Practice first tone with 'ge'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄍㄜ",
    pronunciation: "gē",
    examples: "哥 (gē - older brother)"
  },
  {
    order: 246,
    level: 3,
    title: "Tone Practice: gé (Second Tone)",
    content: "Practice second tone with 'ge'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄍㄜ",
    pronunciation: "gé",
    examples: "格 (gé - grid)"
  },
  {
    order: 247,
    level: 3,
    title: "Tone Practice: gě (Third Tone)",
    content: "Practice third tone with 'ge'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄍㄜ",
    pronunciation: "gě",
    examples: "給 (gěi - to give)"
  },
  {
    order: 248,
    level: 3,
    title: "Tone Practice: gè (Fourth Tone)",
    content: "Practice fourth tone with 'ge'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄍㄜ",
    pronunciation: "gè",
    examples: "個 (gè - measure word)"
  },
  {
    order: 249,
    level: 3,
    title: "Tone Practice: zhī (First Tone)",
    content: "Practice first tone with 'zhi'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄓ",
    pronunciation: "zhī",
    examples: "知 (zhī - to know)"
  },
  {
    order: 250,
    level: 3,
    title: "Tone Practice: zhí (Second Tone)",
    content: "Practice second tone with 'zhi'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄓ",
    pronunciation: "zhí",
    examples: "直 (zhí - straight)"
  },
  {
    order: 251,
    level: 3,
    title: "Tone Practice: zhǐ (Third Tone)",
    content: "Practice third tone with 'zhi'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄓ",
    pronunciation: "zhǐ",
    examples: "只 (zhǐ - only)"
  },
  {
    order: 252,
    level: 3,
    title: "Tone Practice: zhì (Fourth Tone)",
    content: "Practice fourth tone with 'zhi'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄓ",
    pronunciation: "zhì",
    examples: "至 (zhì - to arrive)"
  },
  {
    order: 253,
    level: 3,
    title: "Tone Practice: yī (First Tone)",
    content: "Practice first tone with 'yi'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄧ",
    pronunciation: "yī",
    examples: "一 (yī - one)"
  },
  {
    order: 254,
    level: 3,
    title: "Tone Practice: yí (Second Tone)",
    content: "Practice second tone with 'yi'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄧ",
    pronunciation: "yí",
    examples: "移 (yí - to move)"
  },
  {
    order: 255,
    level: 3,
    title: "Tone Practice: yǐ (Third Tone)",
    content: "Practice third tone with 'yi'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄧ",
    pronunciation: "yǐ",
    examples: "以 (yǐ - to use)"
  },
  {
    order: 256,
    level: 3,
    title: "Tone Practice: yì (Fourth Tone)",
    content: "Practice fourth tone with 'yi'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄧ",
    pronunciation: "yì",
    examples: "意 (yì - meaning)"
  },
  {
    order: 257,
    level: 3,
    title: "Tone Practice: wū (First Tone)",
    content: "Practice first tone with 'wu'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄨ",
    pronunciation: "wū",
    examples: "屋 (wū - house)"
  },
  {
    order: 258,
    level: 3,
    title: "Tone Practice: wú (Second Tone)",
    content: "Practice second tone with 'wu'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄨ",
    pronunciation: "wú",
    examples: "無 (wú - without)"
  },
  {
    order: 259,
    level: 3,
    title: "Tone Practice: wǔ (Third Tone)",
    content: "Practice third tone with 'wu'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄨ",
    pronunciation: "wǔ",
    examples: "五 (wǔ - five)"
  },
  {
    order: 260,
    level: 3,
    title: "Tone Practice: wù (Fourth Tone)",
    content: "Practice fourth tone with 'wu'.",
    lesson_type: "tone",
    bpmf_symbol: "ㄨ",
    pronunciation: "wù",
    examples: "物 (wù - thing)"
  },
  {
    order: 261,
    level: 3,
    title: "Word Practice: 爸爸 (bàba - father)",
    content: "Practice the word 'father'.",
    lesson_type: "word",
    bpmf_symbol: "ㄅㄚ",
    pronunciation: "bà",
    examples: "爸爸 (bàba - father)"
  },
  {
    order: 262,
    level: 3,
    title: "Word Practice: 媽媽 (māma - mother)",
    content: "Practice the word 'mother'.",
    lesson_type: "word",
    bpmf_symbol: "ㄇㄚ",
    pronunciation: "mā",
    examples: "媽媽 (māma - mother)"
  },
  {
    order: 263,
    level: 3,
    title: "Word Practice: 你好 (nǐhǎo - hello)",
    content: "Practice the greeting 'hello'.",
    lesson_type: "word",
    bpmf_symbol: "ㄋㄧ",
    pronunciation: "nǐ",
    examples: "你好 (nǐhǎo - hello)"
  },
  {
    order: 264,
    level: 3,
    title: "Word Practice: 謝謝 (xièxie - thank you)",
    content: "Practice the word 'thank you'.",
    lesson_type: "word",
    bpmf_symbol: "ㄒㄧㄝ",
    pronunciation: "xiè",
    examples: "謝謝 (xièxie - thank you)"
  },
  {
    order: 265,
    level: 3,
    title: "Word Practice: 再見 (zàijiàn - goodbye)",
    content: "Practice the word 'goodbye'.",
    lesson_type: "word",
    bpmf_symbol: "ㄗㄞ",
    pronunciation: "zài",
    examples: "再見 (zàijiàn - goodbye)"
  },
  {
    order: 266,
    level: 3,
    title: "Word Practice: 我 (wǒ - I/me)",
    content: "Practice the word 'I/me'.",
    lesson_type: "word",
    bpmf_symbol: "ㄨㄛ",
    pronunciation: "wǒ",
    examples: "我 (wǒ - I/me)"
  },
  {
    order: 267,
    level: 3,
    title: "Word Practice: 你 (nǐ - you)",
    content: "Practice the word 'you'.",
    lesson_type: "word",
    bpmf_symbol: "ㄋㄧ",
    pronunciation: "nǐ",
    examples: "你 (nǐ - you)"
  },
  {
    order: 268,
    level: 3,
    title: "Word Practice: 他 (tā - he/him)",
    content: "Practice the word 'he/him'.",
    lesson_type: "word",
    bpmf_symbol: "ㄊㄚ",
    pronunciation: "tā",
    examples: "他 (tā - he/him)"
  },
  {
    order: 269,
    level: 3,
    title: "Word Practice: 她 (tā - she/her)",
    content: "Practice the word 'she/her'.",
    lesson_type: "word",
    bpmf_symbol: "ㄊㄚ",
    pronunciation: "tā",
    examples: "她 (tā - she/her)"
  },
  {
    order: 270,
    level: 3,
    title: "Word Practice: 好 (hǎo - good)",
    content: "Practice the word 'good'.",
    lesson_type: "word",
    bpmf_symbol: "ㄏㄠ",
    pronunciation: "hǎo",
    examples: "好 (hǎo - good)"
  },
  {
    order: 271,
    level: 3,
    title: "Word Practice: 不 (bù - no/not)",
    content: "Practice the word 'no/not'.",
    lesson_type: "word",
    bpmf_symbol: "ㄅㄨ",
    pronunciation: "bù",
    examples: "不 (bù - no/not)"
  },
  {
    order: 272,
    level: 3,
    title: "Word Practice: 是 (shì - yes/to be)",
    content: "Practice the word 'yes/to be'.",
    lesson_type: "word",
    bpmf_symbol: "ㄕ",
    pronunciation: "shì",
    examples: "是 (shì - yes/to be)"
  },
  {
    order: 273,
    level: 3,
    title: "Word Practice: 有 (yǒu - to have)",
    content: "Practice the word 'to have'.",
    lesson_type: "word",
    bpmf_symbol: "ㄧㄡ",
    pronunciation: "yǒu",
    examples: "有 (yǒu - to have)"
  },
  {
    order: 274,
    level: 3,
    title: "Word Practice: 沒有 (méiyǒu - don't have)",
    content: "Practice the phrase 'don't have'.",
    lesson_type: "word",
    bpmf_symbol: "ㄇㄟ",
    pronunciation: "méi",
    examples: "沒有 (méiyǒu - don't have)"
  },
  {
    order: 275,
    level: 3,
    title: "Word Practice: 請 (qǐng - please)",
    content: "Practice the word 'please'.",
    lesson_type: "word",
    bpmf_symbol: "ㄑㄧㄥ",
    pronunciation: "qǐng",
    examples: "請 (qǐng - please)"
  },
  {
    order: 276,
    level: 3,
    title: "Word Practice: 對不起 (duìbuqǐ - sorry)",
    content: "Practice the phrase 'sorry'.",
    lesson_type: "word",
    bpmf_symbol: "ㄉㄨㄟ",
    pronunciation: "duì",
    examples: "對不起 (duìbuqǐ - sorry)"
  },
  {
    order: 277,
    level: 3,
    title: "Word Practice: 沒關係 (méiguānxi - it's okay)",
    content: "Practice the phrase 'it's okay'.",
    lesson_type: "word",
    bpmf_symbol: "ㄇㄟ",
    pronunciation: "méi",
    examples: "沒關係 (méiguānxi - it's okay)"
  },
  {
    order: 278,
    level: 3,
    title: "Word Practice: 什麼 (shénme - what)",
    content: "Practice the word 'what'.",
    lesson_type: "word",
    bpmf_symbol: "ㄕㄣ",
    pronunciation: "shén",
    examples: "什麼 (shénme - what)"
  },
  {
    order: 279,
    level: 3,
    title: "Word Practice: 哪裡 (nǎlǐ - where)",
    content: "Practice the word 'where'.",
    lesson_type: "word",
    bpmf_symbol: "ㄋㄚ",
    pronunciation: "nǎ",
    examples: "哪裡 (nǎlǐ - where)"
  },
  {
    order: 280,
    level: 3,
    title: "Word Practice: 多少 (duōshǎo - how much)",
    content: "Practice the phrase 'how much'.",
    lesson_type: "word",
    bpmf_symbol: "ㄉㄨㄛ",
    pronunciation: "duō",
    examples: "多少 (duōshǎo - how much)"
  }
]

level_3_lessons.each do |lesson_data|
  Lesson.create!(lesson_data)
end

puts "Created #{Lesson.by_level(3).count} Level 3 lessons!"
puts "Total: #{Lesson.count} lessons across 3 levels!"
