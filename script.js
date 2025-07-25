// ALW Cipher mapping
const ALW_CIPHER = {
    'A': 1, 'L': 2, 'W': 3, 'H': 4, 'S': 5, 'D': 6, 'O': 7, 'Z': 8, 'K': 9, 'V': 10,
    'G': 11, 'R': 12, 'C': 13, 'N': 14, 'Y': 15, 'J': 16, 'U': 17, 'F': 18, 'Q': 19, 
    'B': 20, 'M': 21, 'X': 22, 'I': 23, 'T': 24, 'E': 25, 'P': 26
};

// Reverse mapping for ALW Cipher
const REVERSE_ALW = {};
Object.keys(ALW_CIPHER).forEach(key => {
    REVERSE_ALW[ALW_CIPHER[key]] = key;
});

// WAKANABA Table as shown in the document
const WAKANABA_TABLE = [
    ['A', 'W', 'K', 'N', 'B'],
    ['O', 'H', 'V', 'Y', 'M'],
    ['U', 'S', 'G', 'J', 'X'],
    ['I', 'D', 'R', 'F', 'T'],
    ['E', 'Z', 'C', 'Q', 'P']
];

// Vowels in order of rows
const VOWELS = ['A', 'O', 'U', 'I', 'E'];

// Liber AL text for correspondences
const LIBER_AL_TEXT = "had the manifestation of nuit the unveiling of the company of heaven every man and every woman is a star every number is infinite there is no difference help me o warrior lord of thebes in my unveiling before the children of men be thou hadit my secret centre my heart & my tongue behold it is revealed by aiwass the minister of hoor-paar-kraat the khabs is in the khu not the khu in the khabs worship then the khabs and behold my light shed over you let my servants be few & secret they shall rule the many & the known these are fools that men adore both their gods & their men are fools come forth o children under the stars & take your fill of love i am above you and in you my ecstasy is in yours my joy is to see your joy above the gemmed azure is the naked splendour of nuit she bends in ecstasy to kiss the secret ardours of hadit the winged globe the starry blue are mine o ankh-af-na-khonsu now ye shall know that the chosen priest & apostle of infinite space is the prince-priest the beast and in his woman called the scarlet woman is all power given they shall gather my children into their fold they shall bring the glory of the stars into the hearts of men for he is ever a sun and she a moon but to him is the winged secret flame and to her the stooping starlight but ye are not so chosen burn upon their brows o splendrous serpent o azure-lidded woman bend upon them the key of the rituals is in the secret word which i have given unto him with the god & the adorer i am nothing they do not see me they are as upon the earth i am heaven and there is no other god than me and my lord hadit now therefore i am known to ye by my name nuit and to him by a secret name which i will give him when at last he knoweth me since i am infinite space and the infinite stars thereof do ye also thus bind nothing let there be no difference made among you between any one thing & any other thing for thereby there cometh hurt but whoso availeth in this let him be the chief of all i am nuit and my word is six and fifty divide add multiply and understand then saith the prophet and slave of the beauteous one who am i and what shall be the sign so she answered him bending down a lambent flame of blue all-touching all penetrant her lovely hands upon the black earth & her lithe body arched for love and her soft feet not hurting the little flowers thou knowest and the sign shall be my ecstasy the consciousness of the continuity of existence the omnipresence of my body then the priest answered & said unto the queen of space kissing her lovely brows and the dew of her light bathing his whole body in a sweet-smelling perfume of sweat o nuit continuous one of heaven let it be ever thus that men speak not of thee as one but as none and let them speak not of thee at all since thou art continuous none breathed the light faint & faery of the stars and two for i am divided for love's sake for the chance of union this is the creation of the world that the pain of division is as nothing and the joy of dissolution all for these fools of men and their woes care not thou at all they feel little what is is balanced by weak joys but ye are my chosen ones obey my prophet follow out the ordeals of my knowledge seek me only then the joys of my love will redeem ye from all pain this is so i swear it by the vault of my body by my sacred heart and tongue by all i can give by all i desire of ye all then the priest fell into a deep trance or swoon & said unto the queen of heaven write unto us the ordeals write unto us the rituals write unto us the law but she said the ordeals i write not the rituals shall be half known and half concealed the law is for all this that thou writest is the threefold book of law my scribe ankh-af-na-khonsu the priest of the princes shall not in one letter change this book but lest there be folly he shall comment thereupon by the wisdom of ra-hoor-khuit also the mantras and spells the obeah and the wanga the work of the wand and the work of the sword these he shall learn and teach he must teach but he may make severe the ordeals the word of the law is thelema who calls us thelemites will do no wrong if he look but close into the word for there are therein three grades the hermit and the lover and the man of earth do what thou wilt shall be the whole of the law the word of sin is restriction o man refuse not thy wife if she will o lover if thou wilt depart there is no bond that can unite the divided but love all else is a curse accursed accursed be it to the aeons hell let it be that state of manyhood bound and loathing so with thy all thou hast no right but to do thy will do that and no other shall say nay for pure will unassuaged of purpose delivered from the lust of result is every way perfect the perfect and the perfect are one perfect and not two nay are none nothing is a secret key of this law sixty-one the jews call it i call it eight eighty four hundred & eighteen but they have the half unite by thine art so that all disappear my prophet is a fool with his one one one are not they the ox and none by the book abrogate are all rituals all ordeals all words and signs ra-hoor-khuit hath taken his seat in the east at the equinox of the gods and let asar be with isa who also are one but they are not of me let asar be the adorant isa the sufferer hoor in his secret name and splendour is the lord initiating there is a word to say about the hierophantic task behold there are three ordeals in one and it may be given in three ways the gross must pass through fire let the fine be tried in intellect and the lofty chosen ones in the highest thus ye have star & star system & system let not one know well the other there are four gates to one palace the floor of that palace is of silver and gold lapis lazuli & jasper are there and all rare scents jasmine & rose and the emblems of death let him enter in turn or at once the four gates let him stand on the floor of the palace will he not sink amn ho warrior if thy servant sink but there are means and means be goodly therefore dress ye all in fine apparel eat rich foods and drink sweet wines and wines that foam also take your fill and will of love as ye will when where and with whom ye will but always unto me if this be not aright if ye confound the space-marks saying they are one or saying they are many if the ritual be not ever unto me then expect the direful judgments of ra hoor khuit this shall regenerate the world the little world my sister my heart & my tongue unto whom i send this kiss also o scribe and prophet though thou be of the princes it shall not assuage thee nor absolve thee but ecstasy be thine and joy of earth ever to me to me change not as much as the style of a letter for behold thou o prophet shalt not behold all these mysteries hidden therein the child of thy bowels he shall behold them expect him not from the east nor from the west for from no expected house cometh that child aum all words are sacred and all prophets true save only that they understand a little solve the first half of the equation leave the second unattacked but thou hast all in the clear light and some though not all in the dark invoke me under my stars love is the law love under will nor let the fools mistake love for there are love and love there is the dove and there is the serpent choose ye well he my prophet hath chosen knowing the law of the fortress and the great mystery of the house of god all these old letters of my book are aright but 90 is not the star this also is secret my prophet shall reveal it to the wise i give unimaginable joys on earth certainty not faith while in life upon death peace unutterable rest ecstasy nor do i demand aught in sacrifice my incense is of resinous woods & gums and there is no blood therein because of my hair the trees of eternity my number is 11 as all their numbers who are of us the five pointed star with a circle in the middle & the circle is red my colour is black to the blind but the blue & gold are seen of the seeing also i have a secret glory for them that love me but to love me is better than all things if under the night stars in the desert thou presently burnest mine incense before me invoking me with a pure heart and the serpent flame therein thou shalt come a little to lie in my bosom for one kiss wilt thou then be willing to give all but whoso gives one particle of dust shall lose all in that hour ye shall gather goods and store of women and spices ye shall wear rich jewels ye shall exceed the nations of the earth in splendour & pride but always in the love of me and so shall ye come to my joy i charge you earnestly to come before me in a single robe and covered with a rich headdress i love you i yearn to you pale or purple veiled or voluptuous i who am all pleasure and purple and drunkenness of the innermost sense desire you put on the wings and arouse the coiled splendour within you come unto me at all my meetings with you shall the priestess say  and her eyes shall burn with desire as she stands bare and rejoicing in my secret temple  to me to me calling forth the flame of the hearts of all in her love-chant sing the rapturous love-song unto me burn to me perfumes wear to me jewels drink to me for i love you i love you i am the blue-lidded daughter of sunset i am the naked brilliance of the voluptuous night-sky to me to me the manifestation of nuit is at an end   nu the hiding of hadit come all ye and learn the secret that hath not yet been revealed i hadit am the complement of nu my bride i am not extended and khabs is the name of my house in the sphere i am everywhere the centre as she the circumference is nowhere found yet she shall be known & i never behold the rituals of the old time are black let the evil ones be cast away let the good ones be purged by the prophet then shall this knowledge go aright i am the flame that burns in every heart of man and in the core of every star i am life and the giver of life yet therefore is the knowledge of me the knowledge of death i am the magician and the exorcist i am the axle of the wheel and the cube in the circle \"come unto me\" is a foolish word for it is i that go who worshipped heru-pa-kraath have worshipped me ill for i am the worshipper remember all ye that existence is pure joy that all the sorrows are but as shadows they pass & are done but there is that which remains o prophet thou hast ill will to learn this writing i see thee hate the hand & the pen but i am stronger because of me in thee which thou knewest not for why because thou wast the knower and me now let there be a veiling of this shrine now let the light devour men and eat them up with blindness for i am perfect being not and my number is nine by the fools but with the just i am eight and one in eight which is vital for i am none indeed the empress and the king are not of me for there is a further secret i am the empress & the hierophant thus eleven as my bride is eleven hear me ye people of sighing the sorrows of pain and regret are left to the dead and the dying the folk that not know me as yet these are dead these fellows they feel not we are not for the poor and sad the lords of the earth are our kinsfolk is a god to live in a dog no but the highest are of us they shall rejoice our chosen who sorroweth is not of us beauty and strength leaping laughter and delicious languor force and fire are of us we have nothing with the outcast and the unfit let them die in their misery for they feel not compassion is the vice of kings stamp down the wretched & the weak this is the law of the strong this is our law and the joy of the world think not o king upon that lie that thou must die verily thou shalt not die but live now let it be understood if the body of the king dissolve he shall remain in pure ecstasy for ever nuit hadit ra-hoor-khuit the sun strength & sight light these are for the servants of the star & the snake i am the snake that giveth knowledge & delight and bright glory and stir the hearts of men with drunkenness to worship me take wine and strange drugs whereof i will tell my prophet & be drunk thereof they shall not harm ye at all it is a lie this folly against self the exposure of innocence is a lie be strong o man lust enjoy all things of sense and rapture fear not that any god shall deny thee for this i am alone there is no god where i am behold these be grave mysteries for there are also of my friends who be hermits now think not to find them in the forest or on the mountain but in beds of purple caressed by magnificent beasts of women with large limbs and fire and light in their eyes and masses of flaming hair about them there shall ye find them ye shall see them at rule at victorious armies at all the joy and there shall be in them a joy a million times greater than this beware lest any force another king against king love one another with burning hearts on the low men trample in the fierce lust of your pride in the day of your wrath ye are against the people o my chosen i am the secret serpent coiled about to spring in my coiling there is joy if i lift up my head i and my nuit are one if i droop down mine head and shoot forth venom then is rapture of the earth and i and the earth are one there is great danger in me for who doth not understand these runes shall make a great miss he shall fall down into the pit called because and there he shall perish with the dogs of reason now a curse upon because and his kin may because be accursed for ever if will stops and cries why invoking because then will stops & does nought if power asks why then is power weakness also reason is a lie for there is a factor infinite & unknown & all their words are skew-wise enough of because be he damned for a dog but ye o my people rise up & awake let the rituals be rightly performed with joy & beauty there are rituals of the elements and feasts of the times a feast for the first night of the prophet and his bride a feast for the three days of the writing of the book of the law a feast for tahuti and the child of the prophet secret o prophet a feast for the supreme ritual and a feast for the equinox of the gods a feast for fire and a feast for water a feast for life and a greater feast for death a feast every day in your hearts in the joy of my rapture a feast every night unto nu and the pleasure of uttermost delight aye feast rejoice there is no dread hereafter there is the dissolution and eternal ecstasy in the kisses of nu there is death for the dogs dost thou fail art thou sorry is fear in thine heart where i am these are not pity not the fallen i never knew them i am not for them i console not i hate the consoled & the consoler i am unique & conqueror i am not of the slaves that perish be they damned & dead amen this is of the 4 there is a fifth who is invisible & therein am i as a babe in an egg blue am i and gold in the light of my bride but the red gleam is in my eyes & my spangles are purple & green purple beyond purple it is the light higher than eyesight there is a veil that veil is black it is the veil of the modest woman it is the veil of sorrow & the pall of death this is none of me tear down that lying spectre of the centuries veil not your vices in virtuous words these vices are my service ye do well & i will reward you here and hereafter fear not o prophet when these words are said thou shalt not be sorry thou art emphatically my chosen and blessed are the eyes that thou shalt look upon with gladness but i will hide thee in a mask of sorrow they that see thee shall fear thou art fallen but i lift thee up nor shall they who cry aloud their folly that thou meanest nought avail thou shall reveal it thou availest they are the slaves of because they are not of me the stops as thou wilt the letters change them not in style or value thou shalt obtain the order & value of the english alphabet thou shalt find new symbols to attribute them unto begone ye mockers even though ye laugh in my honour ye shall laugh not long then when ye are sad know that i have forsaken you he that is righteous shall be righteous still he that is filthy shall be filthy still yea deem not of change ye shall be as ye are & not other therefore the kings of the earth shall be kings for ever the slaves shall serve there is none that shall be cast down or lifted up all is ever as it was yet there are masked ones my servants it may be that yonder beggar is a king a king may choose his garment as he will there is no certain test but a beggar cannot hide his poverty beware therefore love all lest perchance is a king concealed say you so fool if he be a king thou canst not hurt him therefore strike hard & low and to hell with them master there is a light before thine eyes o prophet a light undesired most desirable i am uplifted in thine heart and the kisses of the stars rain hard upon thy body thou art exhaust in the voluptuous fullness of the inspiration the expiration is sweeter than death more rapid and laughterful than a caress of hell's own worm oh thou art overcome we are upon thee our delight is all over thee hail hail prophet of nu prophet of had prophet of ra-hoor-khu now rejoice now come in our splendour & rapture come in our passionate peace & write sweet words for the kings i am the master thou art the holy chosen one write & find ecstasy in writing work & be our bed in working thrill with the joy of life & death ah thy death shall be lovely whoso seeth it shall be glad thy death shall be the seal of the promise of our age long love come lift up thine heart & rejoice we are one we are none hold hold bear up in thy rapture fall not in swoon of the excellent kisses harder hold up thyself lift thine head breathe not so deep  die ah ah what do i feel is the word exhausted there is help & hope in other spells wisdom says be strong then canst thou bear more joy be not animal refine thy rapture if thou drink drink by the eight and ninety rules of art if thou love exceed by delicacy and if thou do aught joyous let there be subtlety therein but exceed exceed strive ever to more and if thou art truly mine  and doubt it not an if thou art ever joyous  death is the crown of all ah ah death death thou shalt long for death death is forbidden o man unto thee the length of thy longing shall be the strength of its glory he that lives long & desires death much is ever the king among the kings aye listen to the numbers & the words 4 6 3 8 a b k 2 4 a l g m o r 3 y x 24 89 r p s t o v a l what meaneth this o prophet thou knowest not nor shalt thou know ever there cometh one to follow thee he shall expound it but remember o chose none to be me to follow the love of nu in the star-lit heaven to look forth upon men to tell them this glad word o be thou proud and mighty among men lift up thyself for there is none like unto thee among men or among gods lift up thyself o my prophet thy stature shall surpass the stars they shall worship thy name foursquare mystic wonderful the number of the man and the name of thy house 418 the end of the hiding of hadit and blessing & worship to the prophet of the lovely star   abrahadabra the reward of ra hoor khut there is division hither homeward there is a word not known spelling is defunct all is not aught beware hold raise the spell of ra-hoor-khuit now let it be first understood that i am a god of war and of vengeance i shall deal hardly with them choose ye an island fortify it dung it about with enginery of war i will give you a war-engine with it ye shall smite the peoples and none shall stand before you lurk withdraw upon them this is the law of the battle of conquest thus shall my worship be about my secret house get the stele of revealing itself set it in thy secret temple  and that temple is already aright disposed  & it shall be your kiblah for ever it shall not fade but miraculous colour shall come back to it day after day close it in locked glass for a proof to the world this shall be your only proof i forbid argument conquer that is enough i will make easy to you the abstruction from the ill-ordered house in the victorious city thou shalt thyself convey it with worship o prophet though thou likest it not thou shalt have danger & trouble ra-hoor-khu is with thee worship me with fire & blood worship me with swords & with spears let the woman be girt with a sword before me let blood flow to my name trample down the heathen be upon them o warrior i will give you of their flesh to eat sacrifice cattle little and big after a child but not now ye shall see that hour o blessed beast and thou the scarlet concubine of his desire ye shall be sad thereof deem not too eagerly to catch the promises fear not to undergo the curses ye even ye know not this meaning all fear not at all fear neither men nor fates nor gods nor anything money fear not nor laughter of the folk folly nor any other power in heaven or upon the earth or under the earth nu is your refuge as hadit your light and i am the strength force vigour of your arms mercy let be off damn them who pity kill and torture spare not be upon them that stele they shall call the abomination of desolation count well its name & it shall be to you as 718 why because of the fall of because that he is not there again set up my image in the east thou shalt buy thee an image which i will show thee especial not unlike the one thou knowest and it shall be suddenly easy for thee to do this the other images group around me to support me let all be worshipped for they shall cluster to exalt me i am the visible object of worship the others are secret for the beast & his bride are they and for the winners of the ordeal x what is this thou shalt know for perfume mix meal & honey & thick leavings of red wine then oil of abramelin and olive oil and afterward soften & smooth down with rich fresh blood the best blood is of the moon monthly then the fresh blood of a child or dropping from the host of heaven then of enemies then of the priest or of the worshippers last of some beast no matter what this burn of this make cakes & eat unto me this hath also another use let it be laid before me and kept thick with perfumes of your orison it shall become full of beetles as it were and creeping things sacred unto me these slay naming your enemies & they shall fall before you also these shall breed lust & power of lust in you at the eating thereof also ye shall be strong in war moreover be they long kept it is better for they swell with my force all before me my altar is of open brass work burn thereon in silver or gold there cometh a rich man from the west who shall pour his gold upon thee from gold forge steel be ready to fly or to smite but your holy place shall be untouched throughout the centuries though with fire and sword it be burnt down & shattered yet an invisible house there standeth and shall stand until the fall of the great equinox when hrumachis shall arise and the double-wanded one assume my throne and place another prophet shall arise and bring fresh fever from the skies another woman shall awake the lust & worship of the snake another soul of god and beast shall mingle in the globed priest another sacrifice shall stain the tomb another king shall reign and blessing no longer be poured to the hawk-headed mystical lord the half of the word of heru-ra-ha called hoor-pa-kraat and ra-hoor-khut then said the prophet unto the god i adore thee in the song i am the lord of thebes and i the inspired forth-speaker of mentu for me unveils the veiled sky the self-slain ankh-af-na-khonsu whose words are truth i invoke i greet thy presence o ra-hoor-khuit unity uttermost showed i adore the might of thy breath supreme and terrible god who makest the gods and death to tremble before thee i i adore thee appear on the throne of ra open the ways of the khu lighten the ways of the ka the ways of the khabs run through to stir me or still me aum let it fill me so that thy light is in me & its red flame is as a sword in my hand to push thy order there is a secret door that i shall make to establish thy way in all the quarters these are the adorations as thou hast written as it is said the light is mine its rays consume me i have made a secret door into the house of ra and tum of khephra and of ahathoor i am thy theban o mentu the prophet ankh-af-na-khonsu by bes-na-maut my breast i beat by wise ta-nech i weave my spell show thy star-splendour o nuit bid me within thine house to dwell o winged snake of light hadit abide with me ra-hoor-khuit all this and a book to say how thou didst come hither and a reproduction of this ink and paper for ever  for in it is the word secret & not only in the english  and thy comment upon this the book of the law shall be printed beautifully in red ink and black upon beautiful paper made by hand and to each man and woman that thou meetest were it but to dine or to drink at them it is the law to give then they shall chance to abide in this bliss or no it is no odds do this quickly but the work of the comment that is easy and hadit burning in thy heart shall make swift and secure thy pen establish at thy kaaba a clerk-house all must be done well and with business way the ordeals thou shalt oversee thyself save only the blind ones refuse none but thou shalt know & destroy the traitors i am ra-hoor-khuit and i am powerful to protect my servant success is thy proof argue not convert not talk not over much them that seek to entrap thee to overthrow thee them attack without pity or quarter & destroy them utterly swift as a trodden serpent turn and strike be thou yet deadlier than he drag down their souls to awful torment laugh at their fear spit upon them let the scarlet woman beware if pity and compassion and tenderness visit her heart if she leave my work to toy with old sweetnesses then shall my vengeance be known i will slay me her child i will alienate her heart i will cast her out from men as a shrinking and despised harlot shall she crawl through dusk wet streets and die cold and an-hungered but let her raise herself in pride let her follow me in my way let her work the work of wickedness let her kill her heart let her be loud and adulterous let her be covered with jewels and rich garments and let her be shameless before all men then will i lift her to pinnacles of power then will i breed from her a child mightier than all the kings of the earth i will fill her with joy with my force shall she see & strike at the worship of nu she shall achieve hadit i am the warrior lord of the forties the eighties cower before me & are abased i will bring you to victory & joy i will be at your arms in battle & ye shall delight to slay success is your proof courage is your armour go on go on in my strength & ye shall turn not back for any this book shall be translated into all tongues but always with the original in the writing of the beast for in the chance shape of the letters and their position to one another in these are mysteries that no beast shall divine let him not seek to try but one cometh after him whence i say not who shall discover the key of it all then this line drawn is a key then this circle squared in its failure is a key also and abrahadabra it shall be his child & that strangely let him not seek after this for thereby alone can he fall from it now this mystery of the letters is done and i want to go on to the holier place i am in a secret fourfold word the blasphemy against all gods of men curse them curse them curse them with my hawk's head i peck at the eyes of jesus as he hangs upon the cross i flap my wings in the face of mohammed & blind him with my claws i tear out the flesh of the indian and the buddhist mongol and din bahlasti ompehda i spit on your crapulous creeds let mary inviolate be torn upon wheels for her sake let all chaste women be utterly despised among you also for beauty's sake and love's despise also all cowards professional soldiers who dare not fight but play all fools despise but the keen and the proud the royal and the lofty ye are brothers as brothers fight ye there is no law beyond do what thou wilt there is an end of the word of the god enthroned in ra's seat lightening the girders of the soul to me do ye reverence to me come ye through tribulation of ordeal which is bliss the fool readeth this book of the law and its comment & he understandeth it not let him come through the first ordeal & it will be to him as silver through the second gold through the third stones of precious water through the fourth ultimate sparks of the intimate fire yet to all it shall seem beautiful its enemies who say not so are mere liars there is success i am the hawk-headed lord of silence & of strength my nemyss shrouds the night-blue sky hail ye twin warriors about the pillars of the world for your time is nigh at hand i am the lord of the double wand of power the wand of the force of coph nia but my left hand is empty for i have crushed an universe & nought remains paste the sheets from right to left and from top to bottom then behold there is a splendour in my name hidden and glorious as the sun of midnight is ever the son the ending of the words is the word abrahadabra the book of the law is written and concealed aum ha  the comment do what thou wilt shall be the whole of the law the study of this book is forbidden it is wise to destroy this copy after the first reading whosoever disregards this does so at his own risk and peril these are most dire those who discuss the contents of this book are to be shunned by all as centres of pestilence all questions of the law are to be decided only by appeal to my writings each for himself there is no law beyond do what thou wilt love is the law love under will the priest of the princes ankh-f-n-khonsu";

// Tab functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Calculate ALW value for a word
function calculateALW(word) {
    return word.toUpperCase().split('').reduce((sum, letter) => {
        return sum + (ALW_CIPHER[letter] || 0);
    }, 0);
}

// Count only letters (excluding spaces and punctuation)
function countLetters(word) {
    return word.replace(/[^A-Za-z]/g, '').length;
}

// Perform Count Well calculation
function calculateCountWell(word1, word2) {
    // Calculate ALW values
    const word1Value = calculateALW(word1);
    const word2Value = calculateALW(word2);
    
    // Count letters
    const word1Letters = countLetters(word1);
    const word2Letters = countLetters(word2);
    
    // Count Well calculations
    const word1Result = word1Value * word2Letters;
    const word2Result = word2Value * word1Letters;
    const finalTotal = word1Result + word2Result;
    
    return {
        word1: {
            text: word1,
            value: word1Value,
            letters: word1Letters,
            result: word1Result
        },
        word2: {
            text: word2,
            value: word2Value,
            letters: word2Letters,
            result: word2Result
        },
        total: finalTotal
    };
}

// Calculate simple ALW with letter breakdown
function calculateSimpleALW(text) {
    // Check if input is a number
    if (/^\d+$/.test(text)) {
        // If it's a number, just return the number as the total
        return {
            originalText: text,
            cleanText: text,
            breakdown: [],
            total: parseInt(text),
            isNumber: true
        };
    }
    
    // Otherwise, process as a word/phrase
    const cleanText = text.toUpperCase().replace(/[^A-Z]/g, '');
    const letters = cleanText.split('');
    const breakdown = letters.map(letter => ({
        letter: letter,
        value: ALW_CIPHER[letter] || 0
    }));
    const total = breakdown.reduce((sum, item) => sum + item.value, 0);
    
    return {
        originalText: text.toUpperCase(),
        cleanText: cleanText,
        breakdown: breakdown,
        total: total,
        isNumber: false
    };
}

// Find words with the same ALW value
function findCorrespondences(targetValue) {
    // Split the text into words
    const words = LIBER_AL_TEXT.split(/\s+/);
    
    // Find words with matching ALW value
    const matches = [];
    for (let word of words) {
        // Clean the word (remove punctuation)
        const cleanWord = word.replace(/[^\w]/g, '');
        if (cleanWord.length < 3) continue; // Skip very short words
        
        const wordValue = calculateALW(cleanWord);
        if (wordValue === targetValue) {
            matches.push(cleanWord);
        }
    }
    
    // Remove duplicates
    return [...new Set(matches)];
}

// Find phrases with the same ALW value
function findPhraseCorrespondences(targetValue) {
    // Split the text into words
    const words = LIBER_AL_TEXT.split(/\s+/);
    
    // Find 2-3 word phrases with matching ALW value
    const matches = [];
    
    // Check 2-word phrases
    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i].replace(/[^\w]/g, '');
        const word2 = words[i+1].replace(/[^\w]/g, '');
        
        if (word1.length < 2 || word2.length < 2) continue; // Skip very short words
        
        const phrase = word1 + ' ' + word2;
        const phraseValue = calculateALW(word1 + word2);
        
        if (phraseValue === targetValue) {
            matches.push(phrase);
        }
    }
    
    // Check 3-word phrases
    for (let i = 0; i < words.length - 2; i++) {
        const word1 = words[i].replace(/[^\w]/g, '');
        const word2 = words[i+1].replace(/[^\w]/g, '');
        const word3 = words[i+2].replace(/[^\w]/g, '');
        
        if (word1.length < 2 || word2.length < 2 || word3.length < 2) continue;
        
        const phrase = word1 + ' ' + word2 + ' ' + word3;
        const phraseValue = calculateALW(word1 + word2 + word3);
        
        if (phraseValue === targetValue) {
            matches.push(phrase);
        }
    }
    
    // Remove duplicates
    return [...new Set(matches)];
}

// Find the row of a letter in the WAKANABA table
function findRowInWakanaba(letter) {
    for (let i = 0; i < WAKANABA_TABLE.length; i++) {
        if (WAKANABA_TABLE[i].includes(letter)) {
            return i;
        }
    }
    return -1;
}

// Convert a single digit to a barbarous syllable
function digitToSyllable(digit) {
    // Rule 4: When the number 2 appears, it becomes LA
    if (digit === 2) {
        return 'LA';
    }
    
    // Rule 6: When a Zero (0) appears, it is treated as if it were a 7
    if (digit === 0) {
        digit = 7;
    }
    
    // Get the letter from the ALW cipher
    const letter = REVERSE_ALW[digit];
    
    // If letter not found, return empty
    if (!letter) return '';
    
    // Find the row in WAKANABA table
    const row = findRowInWakanaba(letter);
    
    // If letter not found in WAKANABA table, return empty
    if (row === -1) return '';
    
    // Rule 2: If vowel, add L
    if (VOWELS.includes(letter)) {
        return letter + 'L';
    }
    // Rule 1: If consonant, add vowel from its corresponding line
    else {
        return letter + VOWELS[row];
    }
}

// Convert a number to a barbarous word using WAKANABA rules
function numberToBarbarousWord(num) {
    // Rule 5: Double numbers are halved
    if (num === 11) return 'AL';
    if (num === 22) return 'LA';
    if (num === 33) return 'WA';
    if (num === 44) return 'HO';
    if (num === 55) return 'SU';
    if (num === 66) return 'DO';
    if (num === 77) return 'OL';
    if (num === 88) return 'ZE';
    if (num === 99) return 'KE';
    
    // For numbers 26 or less, convert directly
    if (num <= 26) {
        return digitToSyllable(num);
    }
    // Rule 3: For numbers above 26, split into individual digits
    else {
        // Convert each digit separately
        const digits = num.toString().split('').map(d => parseInt(d));
        const syllables = [];
        
        // Process each digit
        for (let i = 0; i < digits.length; i++) {
            syllables.push(digitToSyllable(digits[i]));
        }
        
        // Join with hyphens
        return syllables.join('-');
    }
}

// Generate Kamea from two words
function generateKamea(word1, word2) {
    // Clean and convert words to uppercase
    const verticalWord = word1.toUpperCase().replace(/[^A-Z]/g, '');
    const horizontalWord = word2.toUpperCase().replace(/[^A-Z]/g, '');
    
    // Create kamea grid
    const kamea = [];
    
    // For each letter in the vertical word (rows)
    for (let i = 0; i < verticalWord.length; i++) {
        const row = [];
        const verticalLetter = verticalWord[i];
        const verticalValue = ALW_CIPHER[verticalLetter] || 0;
        
        // For each letter in the horizontal word (columns)
        for (let j = 0; j < horizontalWord.length; j++) {
            const horizontalLetter = horizontalWord[j];
            const horizontalValue = ALW_CIPHER[horizontalLetter] || 0;
            
            // Calculate cell value (sum of the two letter values)
            const cellValue = verticalValue + horizontalValue;
            row.push(cellValue);
        }
        
        kamea.push({
            letter: verticalLetter,
            values: row
        });
    }
    
    return {
        verticalWord: verticalWord,
        horizontalWord: horizontalWord,
        grid: kamea
    };
}

// Generate barbarous words for each row of the kamea
function generateBarbarousWords(kamea) {
    const barbarousWords = [];
    
    // For each row in the kamea
    for (let i = 0; i < kamea.grid.length; i++) {
        const row = kamea.grid[i];
        const rowValues = row.values;
        const barbarousRow = [];
        
        // Convert each value in the row to a barbarous word
        for (let j = 0; j < rowValues.length; j++) {
            const value = rowValues[j];
            const word = numberToBarbarousWord(value);
            barbarousRow.push(word);
        }
        
        barbarousWords.push({
            letter: row.letter,
            words: barbarousRow
        });
    }
    
    return barbarousWords;
}

// Calculate the Grand Word of the Kamea
function calculateGrandWord(kamea) {
    // Initialize total
    let grandTotal = 0;
    
    // Sum all values in the kamea
    const allValues = [];
    for (let i = 0; i < kamea.grid.length; i++) {
        const row = kamea.grid[i];
        for (let j = 0; j < row.values.length; j++) {
            allValues.push(row.values[j]);
            grandTotal += row.values[j];
        }
    }
    
    // Convert to barbarous word
    const grandWord = numberToBarbarousWord(grandTotal);
    
    return {
        values: allValues,
        grandTotal: grandTotal,
        grandWord: grandWord
    };
}

// Display Count Well results
function displayResults(calculation) {
    const resultsDiv = document.getElementById('results');
    const errorDiv = document.getElementById('error-message');
    
    // Hide error message
    errorDiv.style.display = 'none';
    
    // Update word 1 results
    document.getElementById('word1-text').textContent = calculation.word1.text;
    document.getElementById('word1-value').textContent = calculation.word1.value;
    document.getElementById('word1-count').textContent = calculation.word1.letters;
    document.getElementById('word1-calc').textContent = 
        `${calculation.word1.value} × ${calculation.word2.letters} = ${calculation.word1.result}`;
    
    // Update word 2 results
    document.getElementById('word2-text').textContent = calculation.word2.text;
    document.getElementById('word2-value').textContent = calculation.word2.value;
    document.getElementById('word2-count').textContent = calculation.word2.letters;
    document.getElementById('word2-calc').textContent = 
        `${calculation.word2.value} × ${calculation.word1.letters} = ${calculation.word2.result}`;
    
    // Update final result
    document.getElementById('final-total').textContent = calculation.total;
    document.getElementById('breakdown').textContent = 
        `${calculation.word1.result} + ${calculation.word2.result} = ${calculation.total}`;
    
    // Show results
    resultsDiv.style.display = 'block';
}

// Display simple ALW results
function displaySimpleResults(calculation) {
    const resultsDiv = document.getElementById('simple-results');
    const errorDiv = document.getElementById('simple-error-message');
    
    // Hide error message
    errorDiv.style.display = 'none';
    
    // Update word/phrase
    document.getElementById('simple-word').textContent = calculation.originalText;
    
    // Create letter breakdown if not a direct number input
    const breakdownDiv = document.getElementById('letter-breakdown');
    breakdownDiv.innerHTML = '';
    
    if (!calculation.isNumber) {
        calculation.breakdown.forEach(item => {
            const letterSpan = document.createElement('span');
            letterSpan.className = 'letter-item';
            letterSpan.textContent = `${item.letter} = ${item.value}`;
            breakdownDiv.appendChild(letterSpan);
        });
        breakdownDiv.style.display = 'block';
    } else {
        breakdownDiv.style.display = 'none';
    }
    
    // Update total
    document.getElementById('simple-total').textContent = calculation.total;
    
    // Find correspondences
    const wordCorrespondences = findCorrespondences(calculation.total);
    const phraseCorrespondences = findPhraseCorrespondences(calculation.total);
    
    // Create or update correspondences section
    let correspondencesDiv = document.getElementById('correspondences');
    if (!correspondencesDiv) {
        correspondencesDiv = document.createElement('div');
        correspondencesDiv.id = 'correspondences';
        correspondencesDiv.className = 'correspondences';
        resultsDiv.appendChild(correspondencesDiv);
    } else {
        correspondencesDiv.innerHTML = '';
    }
    
    // Add word correspondences
    if (wordCorrespondences.length > 0) {
        const wordCorresTitle = document.createElement('h4');
        wordCorresTitle.textContent = 'Word Correspondences';
        correspondencesDiv.appendChild(wordCorresTitle);
        
        // Add count
        const wordCount = document.createElement('div');
        wordCount.className = 'correspondence-count';
        wordCount.textContent = `Found ${wordCorrespondences.length} word correspondences`;
        correspondencesDiv.appendChild(wordCount);
        
        const wordList = document.createElement('div');
        wordList.className = 'correspondence-list';
        
        // Display all correspondences
        wordCorrespondences.forEach(word => {
            const wordItem = document.createElement('span');
            wordItem.className = 'correspondence-item';
            wordItem.textContent = word;
            wordList.appendChild(wordItem);
        });
        
        correspondencesDiv.appendChild(wordList);
    }
    
    // Add phrase correspondences
    if (phraseCorrespondences.length > 0) {
        const phraseCorresTitle = document.createElement('h4');
        phraseCorresTitle.textContent = 'Phrase Correspondences';
        correspondencesDiv.appendChild(phraseCorresTitle);
        
        // Add count
        const phraseCount = document.createElement('div');
        phraseCount.className = 'correspondence-count';
        phraseCount.textContent = `Found ${phraseCorrespondences.length} phrase correspondences`;
        correspondencesDiv.appendChild(phraseCount);
        
        const phraseList = document.createElement('div');
        phraseList.className = 'correspondence-list';
        
        // Display all correspondences
        phraseCorrespondences.forEach(phrase => {
            const phraseItem = document.createElement('span');
            phraseItem.className = 'correspondence-item';
            phraseItem.textContent = phrase;
            phraseList.appendChild(phraseItem);
        });
        
        correspondencesDiv.appendChild(phraseList);
    }
    
    // If no correspondences found
    if (wordCorrespondences.length === 0 && phraseCorrespondences.length === 0) {
        const noCorres = document.createElement('p');
        noCorres.className = 'no-correspondences';
        noCorres.textContent = 'No correspondences found in Liber AL vel Legis.';
        correspondencesDiv.appendChild(noCorres);
    }
    
    // Show results
    resultsDiv.style.display = 'block';
}

// Display Kamea results
function displayKameaResults(kamea, barbarousWords) {
    const resultsDiv = document.getElementById('kamea-results');
    const errorDiv = document.getElementById('kamea-error-message');
    const gridDiv = document.getElementById('kamea-grid');
    const barbarousDiv = document.getElementById('barbarous-words-list');
    
    // Hide error message
    errorDiv.style.display = 'none';
    
    // Update phrase
    document.getElementById('kamea-phrase').textContent = 
        `${kamea.verticalWord} ${kamea.horizontalWord}`;
    
    // Clear previous results
    gridDiv.innerHTML = '';
    barbarousDiv.innerHTML = '';
    
    // Create kamea grid
    
    // Create header row with horizontal word letters
    const headerRow = document.createElement('div');
    headerRow.className = 'kamea-row';
    
    // Empty corner cell
    const cornerCell = document.createElement('div');
    cornerCell.className = 'kamea-cell kamea-corner';
    headerRow.appendChild(cornerCell);
    
    // Horizontal word letters as headers
    for (let i = 0; i < kamea.horizontalWord.length; i++) {
        const headerCell = document.createElement('div');
        headerCell.className = 'kamea-cell kamea-header';
        headerCell.textContent = kamea.horizontalWord[i];
        headerRow.appendChild(headerCell);
    }
    
    gridDiv.appendChild(headerRow);
    
    // Create rows for each letter in vertical word
    for (let i = 0; i < kamea.grid.length; i++) {
        const row = kamea.grid[i];
        const rowElement = document.createElement('div');
        rowElement.className = 'kamea-row';
        
        // Vertical word letter as header
        const letterCell = document.createElement('div');
        letterCell.className = 'kamea-cell kamea-header';
        letterCell.textContent = row.letter;
        rowElement.appendChild(letterCell);
        
        // Values for each cell
        for (let j = 0; j < row.values.length; j++) {
            const valueCell = document.createElement('div');
            valueCell.className = 'kamea-cell';
            
            const valueSpan = document.createElement('span');
            valueSpan.className = 'kamea-value';
            valueSpan.textContent = row.values[j];
            
            valueCell.appendChild(valueSpan);
            rowElement.appendChild(valueCell);
        }
        
        gridDiv.appendChild(rowElement);
    }
    
    // Create barbarous words list
    for (let i = 0; i < barbarousWords.length; i++) {
        const row = barbarousWords[i];
        const rowElement = document.createElement('div');
        rowElement.className = 'barbarous-row';
        
        // Row header (letter from vertical word)
        const headerElement = document.createElement('div');
        headerElement.className = 'barbarous-row-header';
        headerElement.textContent = `Row ${row.letter}:`;
        rowElement.appendChild(headerElement);
        
        // Barbarous words for this row
        const wordsElement = document.createElement('div');
        wordsElement.className = 'barbarous-word';
        wordsElement.textContent = row.words.join(' ');
        rowElement.appendChild(wordsElement);
        
        barbarousDiv.appendChild(rowElement);
    }
    
    // Calculate and display the Grand Word
    const grandWordResult = calculateGrandWord(kamea);
    
    // Display the calculation
    document.getElementById('grand-word-calculation').textContent = 
        `Sum of all values: ${grandWordResult.grandTotal}`;
    
    // Display the Grand Word
    document.getElementById('grand-word-value').textContent = grandWordResult.grandWord;
    
    // Show results
    resultsDiv.style.display = 'block';
}

// Display error message
function displayError(message) {
    const resultsDiv = document.getElementById('results');
    const errorDiv = document.getElementById('error-message');
    
    resultsDiv.style.display = 'none';
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}

// Display simple error message
function displaySimpleError(message) {
    const resultsDiv = document.getElementById('simple-results');
    const errorDiv = document.getElementById('simple-error-message');
    
    resultsDiv.style.display = 'none';
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}

// Display kamea error message
function displayKameaError(message) {
    const resultsDiv = document.getElementById('kamea-results');
    const errorDiv = document.getElementById('kamea-error-message');
    
    resultsDiv.style.display = 'none';
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}

// Main Count Well calculation function
function performCalculation() {
    const input = document.getElementById('phrase-input').value.trim();
    
    if (!input) {
        displayError('Please enter two words separated by a space.');
        return;
    }
    
    // Split input into words (handle multiple spaces)
    const words = input.split(/\s+/).filter(word => word.length > 0);
    
    if (words.length !== 2) {
        displayError('Please enter exactly two words separated by a space.');
        return;
    }
    
    // Check if words contain only letters
    const validWordPattern = /^[A-Za-z]+$/;
    if (!validWordPattern.test(words[0]) || !validWordPattern.test(words[1])) {
        displayError('Words should contain only letters (A-Z).');
        return;
    }
    
    // Perform calculation
    const calculation = calculateCountWell(words[0], words[1]);
    displayResults(calculation);
}

// Main simple ALW calculation function
function performSimpleCalculation() {
    const input = document.getElementById('simple-input').value.trim();
    
    if (!input) {
        displaySimpleError('Please enter a word, phrase, or number.');
        return;
    }
    
    // Check if input is a number or contains at least one letter
    if (!/^\d+$/.test(input) && !/[A-Za-z]/.test(input)) {
        displaySimpleError('Input must contain at least one letter or be a number.');
        return;
    }
    
    // Perform calculation
    const calculation = calculateSimpleALW(input);
    displaySimpleResults(calculation);
}

// Main Kamea calculation function
function performKameaCalculation() {
    const input = document.getElementById('kamea-input').value.trim();
    
    if (!input) {
        displayKameaError('Please enter two words separated by a space.');
        return;
    }
    
    // Split input into words (handle multiple spaces)
    const words = input.split(/\s+/).filter(word => word.length > 0);
    
    if (words.length !== 2) {
        displayKameaError('Please enter exactly two words separated by a space.');
        return;
    }
    
    // Check if words contain only letters
    const validWordPattern = /^[A-Za-z]+$/;
    if (!validWordPattern.test(words[0]) || !validWordPattern.test(words[1])) {
        displayKameaError('Words should contain only letters (A-Z).');
        return;
    }
    
    // Generate kamea
    const kamea = generateKamea(words[0], words[1]);
    
    // Generate barbarous words
    const barbarousWords = generateBarbarousWords(kamea);
    
    // Display results
    displayKameaResults(kamea, barbarousWords);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tabs
    initializeTabs();
    
    // Calculator event listeners
    document.getElementById('calculate-btn').addEventListener('click', performCalculation);
    document.getElementById('simple-calculate-btn').addEventListener('click', performSimpleCalculation);
    document.getElementById('kamea-calculate-btn').addEventListener('click', performKameaCalculation);

    document.getElementById('phrase-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performCalculation();
        }
    });

    document.getElementById('simple-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSimpleCalculation();
        }
    });
    
    document.getElementById('kamea-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performKameaCalculation();
        }
    });

    // Auto-uppercase input
    document.getElementById('phrase-input').addEventListener('input', function(e) {
        e.target.value = e.target.value.toUpperCase();
    });

    document.getElementById('simple-input').addEventListener('input', function(e) {
        e.target.value = e.target.value.toUpperCase();
    });
    
    document.getElementById('kamea-input').addEventListener('input', function(e) {
        e.target.value = e.target.value.toUpperCase();
    });

    // Example calculation on page load
    document.getElementById('phrase-input').value = 'AZURE LIDDED';
    performCalculation();
    
    // Example for kamea
    document.getElementById('kamea-input').value = 'BLACK STONE';
});
