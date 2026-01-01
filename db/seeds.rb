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

# Level 2: Keyboard Layout Practice
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
  {
    order: 53,
    level: 2,
    title: "Keyboard Practice: Basic Sounds",
    content: "Practice typing basic sounds using the BPMF keyboard. Type the BPMF symbols for the given romanization: 'ya'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄚ",
    pronunciation: "ya",
    examples: "Type 'ya' (ㄚ) on the keyboard"
  },
  {
    order: 54,
    level: 2,
    title: "Keyboard Practice: Initial + Final",
    content: "Now combine initials and finals. Type the complete BPMF for the given sound: 'ba'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄅㄚ",
    pronunciation: "ba",
    examples: "Type 'ba' (ㄅㄚ) on the keyboard"
  },
  {
    order: 55,
    level: 2,
    title: "Keyboard Practice: More Combinations",
    content: "Practice more combinations of initials and finals: 'ma'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄇㄚ",
    pronunciation: "ma",
    examples: "Type 'ma' (ㄇㄚ) on the keyboard"
  },
  {
    order: 56,
    level: 2,
    title: "Keyboard Practice: Complex Sounds",
    content: "Practice typing more complex sounds with multiple symbols: 'bai'",
    lesson_type: "keyboard",
    bpmf_symbol: "ㄅㄞ",
    pronunciation: "bai",
    examples: "Type 'bai' (ㄅㄞ) on the keyboard"
  }
]

level_2_lessons.each do |lesson_data|
  Lesson.create!(lesson_data)
end

puts "Created #{Lesson.by_level(2).count} Level 2 lessons!"

# Level 3: Combining BPMF with Tone Marks
level_3_lessons = [
  {
    order: 57,
    level: 3,
    title: "Level 3: Combining BPMF with Tone Marks",
    content: "Welcome to Level 3! Now you'll learn to combine BPMF symbols with tone marks to create complete Mandarin words. Mandarin has 4 tones (plus neutral), and tone marks are essential for correct pronunciation.",
    lesson_type: "introduction",
    bpmf_symbol: nil,
    pronunciation: nil,
    examples: nil
  },
  {
    order: 58,
    level: 3,
    title: "Tone Marks: First Tone",
    content: "The first tone (ˉ) is high and flat. Practice combining BPMF with the first tone mark.",
    lesson_type: "tone",
    bpmf_symbol: "ㄇㄚ",
    pronunciation: "mā",
    examples: "媽媽 (māma - mother) uses first tone ˉ"
  },
  {
    order: 59,
    level: 3,
    title: "Tone Marks: Second Tone",
    content: "The second tone (ˊ) rises from middle to high. Practice combining BPMF with the second tone mark.",
    lesson_type: "tone",
    bpmf_symbol: "ㄇㄚ",
    pronunciation: "má",
    examples: "麻 (má - hemp) uses second tone ˊ"
  },
  {
    order: 60,
    level: 3,
    title: "Tone Marks: Third Tone",
    content: "The third tone (ˇ) dips down then rises. Practice combining BPMF with the third tone mark.",
    lesson_type: "tone",
    bpmf_symbol: "ㄇㄚ",
    pronunciation: "mǎ",
    examples: "馬 (mǎ - horse) uses third tone ˇ"
  },
  {
    order: 61,
    level: 3,
    title: "Tone Marks: Fourth Tone",
    content: "The fourth tone (ˋ) falls sharply from high to low. Practice combining BPMF with the fourth tone mark.",
    lesson_type: "tone",
    bpmf_symbol: "ㄇㄚ",
    pronunciation: "mà",
    examples: "罵 (mà - to scold) uses fourth tone ˋ"
  },
  {
    order: 62,
    level: 3,
    title: "Common Words: Family",
    content: "Practice common family words with BPMF and tone marks.",
    lesson_type: "word",
    bpmf_symbol: "ㄅㄚ",
    pronunciation: "bà",
    examples: "爸爸 (bàba - father) uses fourth tone ˋ"
  },
  {
    order: 63,
    level: 3,
    title: "Common Words: Greetings",
    content: "Practice greeting words with BPMF and tone marks.",
    lesson_type: "word",
    bpmf_symbol: "ㄋㄧ",
    pronunciation: "ní",
    examples: "你好 (nǐhǎo - hello) uses third tone ˇ"
  }
]

level_3_lessons.each do |lesson_data|
  Lesson.create!(lesson_data)
end

puts "Created #{Lesson.by_level(3).count} Level 3 lessons!"
puts "Total: #{Lesson.count} lessons across 3 levels!"
