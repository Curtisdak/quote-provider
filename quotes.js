function generateQuote() {
    let bible = {
        "1 Corinthians 16:14 ":'"Let all that you do be done in love."',
        "Colossians 3:14":'"And above all these put on love, which binds everything together in perfect harmony."',
        "1 Corinthians 13:13":'"So now faith, hope, and love abide, these three; but the greatest of these is love."',
        "John 15:13":'" Greater love has no one than this, that someone lay down his life for his friends."',
        "1 John 4:8" :'"Anyone who does not love does not know God, because God is love"',
        "2 Corinthians 5:7" :'" For we live by faith, not by sight."',
        "Hebrews 11:6" : '"And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him."',
        "John 11:40" : '" Then Jesus said, “Did I not tell you that if you believe, you will see the glory of God?”"',
        "James 1:3" : '"Because you know that the testing of your faith produces perseverance."',
        "John 11:25-26" : '"Jesus said to her, “I am the resurrection and the life. The one who believes in me will live, even though they die; and whoever lives by believing in me will never die. Do you believe this?”"',
        "Romans 14:1" : '" Accept the one whose faith is weak, without quarreling over disputable matters."',
        "Matthew 21:22" : '"f you believe, you will receive whatever you ask for in prayer."',
        "John 6:35" : '"Then Jesus declared, “I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty.”"',
        "John 20:29" : '"Then Jesus told him, “Because you have seen me, you have believed; blessed are those who have not seen and yet have believed.”"',
        "Luke 8:50" : '" Hearing this, Jesus said to Jairus, “Don’t be afraid; just believe, and she will be healed.”"',

    }

    let verses = Object.keys(bible)
    let verse = verses[Math.floor(Math.random()*verses.length++)];

    let bibleWord = bible[verse];

    document.getElementById("quote").innerHTML = bibleWord;
    document.getElementById("author").innerHTML = verse;
    
}