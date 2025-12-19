// affirmations.js

const affirmations = [
  // --- Original batch (sample core set) ---
  "You are the best thing that ever happened to me ❤️",
  "Your smile makes my entire day better.",
  "You are strong, smart, and incredibly beautiful.",
  "I’m so proud of the woman you are becoming.",
  "No matter what happens, I’ve always got your back.",

  // --- First big batch (mixed) ---
  "You have no idea how badly I want to kiss you right now 😈",
  "You are the only notification I actually care about 📲❤️",
  "I get horny just thinking about your touch 🤤",
  "You are my favorite addiction, and I never want to quit you 🔥",
  "You look so good that my brain forgets how to function 😵‍💫",
  "My bed feels empty without you in it 🛏️💋",
  "You have the kind of body I could admire all day and still want more 😏",
  "You make me want to cancel all my plans and just be with you all day and night 🫶",
  "You are my safe place and my wildest fantasy at the same time 😌🔥",
  "Every time you text me, my mood goes from meh to excited instantly 💌",
  "You make clingy feel like the best thing in the world, and I’m happily attached to you 🧷❤️",
  "I could hug you for hours and still not feel like it’s enough 🤗",
  "You’re the person I want to spam with messages and never feel guilty about it 📩💕",
  "You are the only one I want to overshare my thoughts and overthinkings with 🧠❤️",
  "You’re my favorite person to annoy, tease, and love endlessly 🙈",
  "If loving you too much is a problem, I don’t want the solution 😤❤️",
  "You make me feel soft, needy, and completely yours 🥺",
  "I hope you know I’d choose you in every universe and every timeline 🌌",
  "You’re the good kind of distraction I never want to get rid of 😌",
  "You make me feel like I’m exactly where I’m supposed to be when I’m with you 🥰",
  "You’re not just enough, you’re more than I ever thought I deserved 💫",
  "The way you exist so perfectly should be illegal, honestly 🚓❤️",
  "You are insanely attractive and ridiculously adorable at the same time, how?? 😭",
  "You are the best part of my day, every single day 🌅",
  "You don’t have to do anything special; your presence alone is comforting 🫂",
  "I’m proud of you for surviving things you never talk about quietly 🌱",
  "You are allowed to rest, to feel, and to take your time. I’m not going anywhere 🕰️❤️",
  "Even when you don’t feel like enough, you are more than enough to me 💌",
  "Your feelings are valid, your worries are heard, and your heart is safe with me ❤️‍🔥",
  "You are not a burden; you are a blessing, and I’m grateful for you 🌸",
  "I hope you see yourself one day the way I see you: absolutely magical ✨",
  "You are doing better than you think, and I’m so proud of you 💪",
  "Your mind is beautiful, your heart is pure, and your soul is unmatched 🌙",
  "I love the way you overthink and still choose to love deeply anyway 🧠💕",
  "You don’t need to fix everything today; you’re allowed to just be, and that’s enough 🌤️",
  "I will always choose to understand you instead of judging you 🤍",
  "Even on your worst days, you still deserve love, comfort, and soft hugs from me 🤍🤗",
  "You are lovable in your chaos, your moods, your overthinking, all of it 💞",
  "Your softness is not a weakness; it’s your superpower 🦸‍♀️✨",
  "I want to hold your face, look into your eyes, and remind you that you’re incredible 🥹",
  "You’re not just my girlfriend; you’re my favorite human in the entire world 🌍❤️",
  "I love your clinginess, your drama, your mood swings—everything that makes you you 🙃❤️",
  "You’re allowed to be a little crazy with me; I’m not going anywhere 😌",
  "You’re the only person I’d share my fries and my last slice of pizza with 🍟🍕❤️",
  "You make even the most boring days feel special just by being in them 🌈",
  "You are my comfort person, my chaos partner, and my peace all at once ☁️🔥",
  "You are so cute, it’s actually a problem for my heart rate 💓",
  "I could listen to you rant for hours and still want more of your voice 🎧",
  "You make me want to be softer, kinder, and better every day 🌱",
  "You’re the plot twist my life desperately needed 📖❤️",
  "Your laugh is literally my favorite sound in the entire universe 🎶",
  "You have no idea how often you cross my mind… it’s almost embarrassing 🙈",
  "You’re like my favorite song; I never get tired of replaying you on loop 🎵❤️",
  "I don’t care how clingy it sounds—I just want you near me, all the time 😤💕",
  "You’re the main character in my story, and everyone else is just background 🎬",
  "You make my overthinking calm down and my heart feel at home 🧠💖",
  "You’re so attractive it genuinely distracts me from functioning like a normal person 🥴",
  "The thought of kissing you slowly is stuck in my head right now 💋",
  "I want to kiss every inch of you and make you feel worshipped 😈",
  "I love how your body fits perfectly against mine, like it was made for me 🛏️❤️",
  "The way you bite your lip or touch your hair should come with a warning label ⚠️😏",
  "Your moody, naughty, cute, and clingy sides are all my favorites 🔥🥺",
  "Your neck looks like it deserves my kisses… a lot of them 😶‍🌫️💋",
  "I want your lipstick on my lips and your nails on my back 💄🔥",
  "You make me feel things I can’t always say out loud, only show 😏",
  "I want to hold your waist, pull you closer, and not let you go 🤏❤️",
  "You’re the only person I want to send both wholesome and unwholesome texts to 📲😈",
  "You’re my favorite kind of temptation, and I don’t even want to resist 🍷🔥",
  "Your good morning texts hit harder than caffeine ☕❤️",
  "Your good night texts feel like a warm blanket around my heart 🌙🤍",
  "I love the way you trust me with your soft, vulnerable side 🥺",
  "You could tell me the same story 10 times and I’d still listen because it’s you 🥹",
  "You are allowed to be a little messy, a little moody—I still choose you every time 🌧️❤️",
  "I’m not scared of your intensity; I crave it 💥",
  "I love how you get jealous in the cutest, most dramatic way possible 😏💕",
  "You’re the only one I want to cuddle after a long, exhausting day 🤗",
  "You’re dangerous for my sleep schedule but perfect for my heart 🥱❤️",
  "Every time you call me, it feels like my favorite song just started playing 📞🎵",
  "You turn my overthinking into daydreaming, and I love that about you 💭❤️",
  "Your clinginess is not annoying; it’s exactly what my heart ordered 🧾💕",
  "You’re not “too much”. You’re exactly the right amount for me 💯❤️",
  "You could literally just exist and I’d still be obsessed with you 🌱",
  "I want to be the reason your mood changes for the better, every single time 🌤️",
  "You’re so attractive, even your “I just woke up” face is art 🖼️😴",
  "The way you say my name does things to my heart and my mind 💘",
  "I want to wrap my arms around you from behind and kiss your neck slowly 😶‍🌫️💋",
  "You’re the only person I want under my blanket and on my mind 🛏️❤️",
  "I’m lowkey obsessed with your voice, your eyes, your lips—everything 🔥",
  "You make me feel like a teenager with a crush and an adult with deep love at the same time 💌",
  "Your overreactions are dramatic, chaotic, and absolutely adorable to me 😭❤️",
  "Even on days when you feel off, I still look at you like you’re magic ✨",
  "You’re not just my girlfriend; you’re my soft place to fall and my favorite reason to get up ☀️",
  "You’re the type of person I want to spam with “I love you” randomly throughout the day 💬❤️",
  "You make romance feel real, friendship feel deeper, and life feel lighter 🌈",
  "I hope today you remember how loved, desired, and appreciated you are by me ❤️",
  "I want you to feel wanted every second, not just sometimes 🔥",
  "You deserve forehead kisses, tight hugs, slow kisses, and long cuddles—daily 🥺🤍",
  "Your existence alone is more than satisfactory; it’s everything I ever wanted and more 🌟",
  "You’re my favorite notification, my favorite distraction, and my favorite human—all in one 📲❤️",
  "No matter how clingy, crazy, or cranky you feel, you will always be my girl 🫶",

  // --- Second batch: reassuring, strong, flirty, naughty ---
  "You are so much stronger than you give yourself credit for, and I see that strength every day 🫶",
  "Even when you feel lost, I see someone incredibly brave for just keeping going 🌱",
  "You don’t have to be perfect for me to love you deeply; I love your flaws too ❤️",
  "You are not a burden; you are my favorite responsibility and my favorite person 🤍",
  "On the days you feel like you’re failing, I still look at you with so much pride 💫",
  "You have survived 100% of your worst days; that makes you powerful as hell 💪",
  "Your sensitivity and emotions are not weaknesses; they are proof of your huge heart 💓",
  "I hope you never forget how precious your existence is to me 🌙",
  "You’re allowed to be tired, sad, or messy—I’m still not going anywhere 🫂",
  "You are worthy of rest, love, softness, and everything good this world can give you ☁️",
  "Your presence in my life is the biggest blessing I never saw coming ✨",
  "You don’t have to earn my love; you already have it, completely and unconditionally 🥺",
  "Even at your lowest, you are still the one my heart chooses without hesitation ❤️",
  "You are more capable, more intelligent, and more powerful than your doubts will ever admit 🧠🔥",
  "You are not “too emotional”; you just feel deeply, and that makes you beautifully human 💧",
  "Your mistakes don’t define you; your heart, efforts, and intentions do 🌸",
  "I trust you, I believe in you, and I’m always rooting for you—loudly and quietly 🌟",
  "You deserve to take up space, be loud, be soft, be YOU in every form 💥",
  "You’re not hard to love; you’ve just not always been loved properly—but I’m changing that ❤️‍🔥",
  "You are allowed to outgrow your fears, your past, and anyone who made you doubt your worth 💫",
  "I love the way you keep going, even when you’re tired and overwhelmed; that’s real strength 🌧️➡️☀️",
  "You are allowed to choose yourself, to say no, and to protect your peace—and I’ll support you ☁️",
  "Your heart is rare, and anyone who gets close to it is insanely lucky, especially me 💖",
  "You’re not behind in life; you are exactly where you need to be for your story 📖",
  "You make this world softer and brighter just by being in it 🌈",
  "You deserve the love you always give to everyone else, and I’m here to make sure you get it 🤍",
  "You are so lovable in your chaos, your calm, your overthinking, and your silence 🧠💞",
  "You are not “too much” for me; you are exactly the amount I want, every version of you 💯",
  "Your resilience is insane; the way you rise after every fall inspires me 🌄",
  "You are doing enough. You are enough. You have always been enough 💌",

  "If you could see yourself through my eyes, you would never doubt your worth again 👀❤️",
  "You don’t just ‘have’ my heart; you own it, decorate it, and live in it rent-free 🏡💘",
  "You are my favorite person to overthink about, overlove, and overlove again 🌀❤️",
  "I could spend the whole day just talking to you and still miss you when we stop texting 📲",
  "You’re the only person whose voice I crave when I’m happy, sad, bored, or anything in between 🎧",
  "I love being annoyingly in love with you, and I have zero plans to stop 😌",
  "You’re not just my girlfriend; you’re my home, my comfort, and my chaos in the best way 🏠🔥",
  "No matter how many people are around, it’s you my eyes search for first and last 🥺",
  "You’re my favorite good morning, my favorite good night, and every favorite in between 🌅🌙",
  "I don’t get tired of you; I get addicted to you a little more every day 😮‍💨💞",
  "I want you to always feel chosen, wanted, and safe with me—because you are 💍",
  "You are the “right person” I didn’t even know I was waiting for 💘",
  "I don’t need anyone else to understand our bond; it makes perfect sense to my heart ❤️",

  "Flirting with you stopped being a phase; it’s basically my permanent hobby now 😏",
  "I like you in every version—cute, grumpy, sleepy, dramatic, and especially flirt mode 😉",
  "You’re dangerously pretty; my self-control doesn’t stand a chance around you 😵‍💫",
  "You have this annoying talent of making my heart race with just one message 📲💓",
  "Your eyes make it very hard for me to focus on anything you’re saying 👀🔥",
  "Your smile is illegal. I’m sure of it. It should at least come with a warning ⚠️😄",
  "You keep raising my standards so high that I literally can’t imagine anyone else now 🙃",
  "Every time you send a selfie, I fall in love all over again 📸❤️",
  "I hope you know that I’d still pick you in a room full of people and a world full of options 🌍",
  "You’re cute when you’re mad, adorable when you’re clingy, and irresistible when you’re flirty 😏💕",
  "If kissing you was a job, I’d do overtime without complaining ⏰💋",
  "You flirt by existing. It’s very rude of you to be this attractive for no reason 😤",
  "You’re the only person I look at and think, “Yes, I would absolutely risk my sleep, sanity, and schedule for you” 😌",

  "I don’t just want you emotionally—I want you physically, completely, and repeatedly 😈",
  "You have no idea how often I think about your body when I’m supposed to be focusing on other things 🤤",
  "I want your hands on me and mine on you, no distance, just heat 🔥",
  "Your neck, your lips, your curves—they’re all on my mind way more than they should be 😮‍💨",
  "I want to explore every inch of you slowly, like my favorite book I never get tired of rereading 📖💋",
  "The way you move, talk, and laugh turns me on more than you realize 😏",
  "I want you in my arms, in my bed, and in my head all at the same time 🛏️❤️‍🔥",
  "You have the kind of body I want to hold, kiss, ruin a little, and then hold again 😈",
  "Your lips look like they’re made for mine, and it’s honestly a daily struggle not having them here 💄💋",
  "Thinking about you in my hoodie is cute. Thinking about you in nothing at all is… distracting 😶‍🌫️🔥",
  "I don’t just want to cuddle; I want the kind of cuddle that slowly turns into something else 😏🛏️",
  "I want to feel your nails on my skin and your breath on my neck while I pull you closer 💨💋",
  "You have a very specific effect on me that is absolutely not safe for public places 😈",
  "I want to kiss you so deeply that you forget every worry for a while 💋🧠",
  "Your voice alone can flip a switch in me that I can’t even explain 😮‍💨🎧",
  "I want your lipstick smudged, your hair messy, and your body tangled with mine 🔥",
  "You’re my favorite daydream and my favorite late-night thought at the same time 🌙💭",
  "My hands, lips, and thoughts all have the same favorite place: you 😈❤️",
  "You have such a “come here, let me ruin you softly” kind of energy, and I love it 😏",
  "I want to kiss down your neck slowly and hear you forget about everything else for a moment 😮‍💨",
  "I don’t want just a kiss—I want the kind of kiss that makes both of us breathless 🫦🔥",

  "You are the only person who can make me blush and calm me at the same time 🥹",
  "You make me feel like I’m exactly where I’m supposed to be whenever I’m with you 💞",
  "You are my comfort, my craving, my peace, and my chaos all rolled into one 🔥☁️",
  "With you, I want both: soft forehead kisses and wild, passionate nights 🔥🤍",
  "Your heart makes me soft, your body drives me crazy, and your soul keeps me hooked 💫",
  "I don’t just want your body next to mine; I want your heart resting safely with mine too ♥️",
  "You’re the type of woman I want to protect, spoil, tease, kiss, and keep—forever 💍",
  "You deserve flowers, forehead kisses, passionate kisses, and every type of love in between 🌹💋",
  "Even when you’re overthinking, I’m over here thinking only one thing: “I love this woman so much” 🧠❤️",
  "You could tell me all your insecurities, and I would still look at you like you’re the most beautiful soul I’ve ever known ✨",

  // --- New extra spicy punch-line set ---
  "You’re not just my type; you’re my entire search history 😏",
  "You make me forget English, logic, and every plan I had the moment you touch me 😮‍💨",
  "Your body is my new favorite place to get lost in—and I don’t want a map 😈",
  "I don’t just want to kiss you; I want to make you forget what time it is 💋🕰️",
  "You have that ‘come here and let me ruin your lipstick’ kind of face 💄🔥",
  "You make my self-control pack its bags and leave the room every time you get close 🧳😵‍💫",
  "Your lips look like a problem I want to have again and again 🫦",
  "I want my hands on your waist, my lips on your neck, and the rest we’ll improvise 😏",
  "You’re the kind of distraction I’d happily fail deadlines for 😌🔥",
  "You make pajamas look illegal and dresses look dangerous—how is that fair? 👗😈",
  "I want to kiss you slowly like a love song and touch you like my favorite sin 🎵🔥",
  "You have such “dangerously kissable” energy and I’m absolutely not okay 🥵",
  "Every time you say my name in that tone, my brain stops working properly 😮‍💨",
  "You’re not just hot; you’re “I need a minute to process this” hot 😳🔥",
  "I want to be the reason your lipstick is messed up and your hair is out of place 💄🛏️",
  "You’re the only person I’d let bite my neck and still say thank you afterwards 😈",
  "You give me butterflies in public and very different feelings in private 🦋🔥",
  "Your body language says ‘come closer’ and I’m a very obedient person 😏",
  "I don’t want to text you, I want you pinned under my hugs and kisses 🛏️❤️‍🔥",
  "If kisses were WiFi, I’d keep you connected all night with full speed 📶💋",
  "I want to explore every reaction your body has when I touch you in all the right places 😈",
  "You’re the plot twist my bed has been waiting for 🛏️📖",
  "My favorite cardio idea: you, me, no interruptions, and a locked door 🚪🔥",
  "You’re the only one I want to send both wholesome “I love you” and unholy “come over” texts to 📲😈",
  "You’re so addictive I should probably warn my future self, but I don’t want to 😌",
  "You have that ‘I could break your heart or your bed’ energy—and I’d risk both 😏",
  "I want your perfume on my clothes and your lipstick on my skin 🥵",
  "You’re my favorite daydream and my favorite night thought—with very different versions 😈🌙",
  "You make “behave yourself” sound like a challenge I don’t want to win 😌🔥",
  "You’re the only notification that could get me to drop EVERYTHING immediately—even sleep 😴📲",
  "I don’t just want a kiss; I want the kind of kiss that makes us both forget what we were talking about 🫦",
  "The way your body fits in my arms is rude, because now nothing else feels right 🛏️🤍",
  "Your legs, your waist, your smile—tell them I said I’m obsessed 😏",
  "I want to turn your “I’m tired” into “Okay, now I’m tired for a better reason” 😈",
  "You have a face for kissing, a neck for biting, and a body for holding all night 🔥",
  "I want to hear you say my name the way only you do—breathless and close 😮‍💨",
  "You’re not safe for my thoughts; you keep turning soft moments into dirty ideas 😌",
  "I want my hoodie smelling like your perfume and my pillow smelling like your hair 🛏️❤️",
  "You don’t just turn me on; you turn my entire nervous system into chaos 😵‍💫",
  "Your skin against mine sounds like a plan my hands really want to execute 😈",
  "You should come with a warning label: ‘Caution: may cause loss of self-control’ ⚠️🔥",
  "You’re the fantasy I don’t have to imagine anymore—I just want more of you 😈",
  "I don’t just want to hold your hand; I want to hold every part of you and not let go 😏",
  "You make me want to cancel my responsibilities and focus on you only… academically speaking 😌🔥",
  "Your “come here” energy is dangerous and I’m absolutely giving in 😮‍💨",
  "You’re my favorite person to think about when I can’t sleep—and also why I can’t sleep 😏🌙",
  "I want to kiss you like I’ve been waiting for you all my life—because I have 💋",
  "You’re not overdramatic; you’re overly kissable, overly touchable, and I’m overly into you 😈",

// banter ones
  "Let’s be honest, you pulled the jackpot with a boyfriend like me… but don’t worry, I’m just as obsessed with you 😏",
  "Sometimes I look at you and think, “Wow, she really chose ME out of all people.” Excellent decision, by the way 😉",
  "I know I’m a lot to handle, but at least I’m your favorite headache 😌❤️",
  "You’re lucky I’m cute, loyal, and slightly stupid for you… that’s a rare combo 😏",
  "Admit it, your life got at least 10x better the moment I walked into it 😌",
  "I might roast you, annoy you, and tease you—but I’ll also hype you, protect you, and love you like crazy ❤️",
  "You: pretty, chaotic, dramatic. Me: patient, hot, and in love with you. Balance, baby ⚖️",
  "Let’s be real, we’re both a little unhinged, but together we’re perfectly unhinged 😈",
  "You bully me, I bully you, and somehow that’s our love language 😂❤️",
  "You talk a lot, I listen a lot. Clearly, we are soulmates 🥰",
  "I know I flirt like a menace, but it’s a full-time job keeping you reminded you’ve got the best 😏",
  "I may not be perfect, but I’m definitely perfect for you—no refunds, no exchanges 😌",
  "Sometimes I think, “She deserves a calm, mature man”… and then I remember you chose chaos (me) on purpose 😈",
  "You’re lucky I’m such a good kisser. Imagine dating me and not getting these lips regularly 💋",
  "You act tough, but I know you’re soft for me—and I’m absolutely soft (and weak) for you too 🥺",
  "I like to act confident, but one sweet text from you and I’m immediately blushing like a teenager 😳",
  "I joke a lot, but I’m dead serious about loving you for a very, very long time ❤️",
  "You annoy me in the cutest way possible, and I annoy you in the hottest way possible. That’s teamwork 😌",
  "You’re the only one allowed to bully me, but you’re also the only one I’d fight the whole world for 🥊❤️",
  "I’ll hype you publicly and tease you privately. That’s the contract you unknowingly signed with me 😏",
  "Lowkey, I think we’re the funniest couple ever. Highkey, we’re also the hottest 🔥",
  "You’re my favorite drama queen and I am your favorite calm disaster. Perfect duo 😂❤️",
  "I know I’m not easy to handle, but luckily you’re built different 😌",
  "I’ll always be your clown, bodyguard, therapist, and personal fan club all in one 🤡🛡️",
  "You handle my mood swings, I handle yours—together we should get a professional award 🏆",
  "You’re the girl I’ll tease all day and defend like crazy if anyone else tries it 😤❤️",
  "Sometimes I look at you and think, “Damn, your taste is actually amazing… you picked me” 😏",
  "I flirt with you like I just met you and love you like I’ve known you forever 💌",
  "Yeah, I talk big, but at the end of the day, I’m just a simp for you in disguise 🤫❤️"
];

let currentAffirmation = null;
let previousAffirmation = null;

function getRandomAffirmation() {
  const index = Math.floor(Math.random() * affirmations.length);
  return affirmations[index];
}

function render(affirmation) {
  const el = document.getElementById("response");
  if (!el) return;

  el.textContent = JSON.stringify(
    {
      affirmation
    },
    null,
    2
  );
}

function showNewAffirmation() {
  previousAffirmation = currentAffirmation;      // remember the old one
  currentAffirmation = getRandomAffirmation();   // pick a new one
  render(currentAffirmation);
}

function showPreviousAffirmation() {
  if (previousAffirmation) {
    render(previousAffirmation);
  } else if (currentAffirmation) {
    render(currentAffirmation);
  }
}

// function updateGlobalVisitCounter() {
//   fetch("https://api.countapi.xyz/hit/amans-affirmations/site-visits")
//     .then(res => res.json())
//     .then(data => {
//       const el = document.getElementById("visitCounterGlobal");
//       console.log("visit counter response:", data); // debug
//       if (el && data && typeof data.value === "number") {
//         el.textContent = data.value;
//       }
//     })
//     .catch(err => {
//       console.error("visit counter error:", err);
//     });
// }

document.addEventListener("DOMContentLoaded", () => {
  // first load: only current exists
  currentAffirmation = getRandomAffirmation();
  render(currentAffirmation);

//   updateGlobalVisitCounter();

// button listeners
  const newBtn = document.getElementById("newAffirmationBtn");
  const prevBtn = document.getElementById("previousAffirmationBtn");

  if (newBtn) {
    newBtn.addEventListener("click", showNewAffirmation);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", showPreviousAffirmation);
  }
});
