export interface Verse {
  readonly reference: string;
  readonly text: string;
  readonly theme: string;
  readonly meditation: string;
}

/**
 * Scripture collection selected around Surefire's vision:
 * "Living Wonders" and "Empowering Lives, Building Kingdom".
 * KJV wording is used throughout.
 */
const meditations = {
  "Living Wonders": "God has not called you to live as a spiritual spectator. Let your life point people toward His reality. Ask Him to make your words, choices and service a clear witness of His power today.",
  "Equipping Believers": "Grace is not only for personal comfort; it equips you to serve. Identify one gift God has placed in you and put it to work to strengthen someone else today.",
  "Impact and Service": "Let your faith become visible through practical goodness. Choose one action that brings help, dignity or hope to another person, and let the Father receive the glory.",
  "Building Kingdom": "God's work involves both uprooting what harms and building what gives life. Ask for courage to confront one destructive pattern and faithfulness to establish something that serves His purposes.",
  "Abundant Life": "Jesus offers life that reaches beyond mere survival. Bring the part of your life that feels diminished to Him, and take one wise step toward wholeness, obedience and gratitude.",
  "Spirit-Empowered Witness": "The Spirit's power is given for witness, not self-display. Pray for boldness, then speak or act in a way that makes Christ known with truth, love and humility.",
  "Purpose and Good Works": "You are not an accident or an afterthought. Receive your identity in Christ, then take the next good step in front of you rather than waiting for a perfect plan.",
  "Transformation": "In Christ, your past does not have the final word. Name the old pattern you must leave behind and choose one concrete response that agrees with the new life God is forming in you.",
  "Rise and Shine": "Do not let fear or yesterday's failure keep your light hidden. Rise with the strength God supplies and let integrity, compassion and courage illuminate your corner today.",
  "Kingdom Influence": "Pray for God's glory to be known beyond your immediate circle. Let your conduct carry the message: consistency, mercy and faithful service can make the knowledge of God visible.",
  "The Great Commission": "The mission begins with people, not platforms. Take one intentional step to share the good news, teach truth or help someone follow Jesus more faithfully.",
  "Serving Others": "Your gifts are entrusted to you for the good of others. Ask who needs what you can offer, then serve without needing applause or control over the outcome.",
  "Generosity and Empowerment": "Generosity breaks the grip of scarcity and makes room for shared flourishing. Give attention, encouragement, resources or practical help where it can genuinely strengthen someone.",
  "Perseverance": "Do not confuse a delayed harvest with a wasted season. Continue doing what is right, review your approach where needed, and refuse to let weariness make your decisions for you.",
  "Diligence and Service": "Bring spiritual fervour into ordinary responsibilities. Work honestly, finish what matters and let excellence become an expression of service to God.",
  "Growth and Completion": "God is still at work in the unfinished parts of your life. Cooperate with that work today through obedience, teachability and one small step toward maturity.",
  "Restoration and Freedom": "God's heart moves toward the broken and burdened. Let this promise move you to seek healing and wise support, and to become a safe, practical source of help for someone else.",
  "Testimony and Wonder": "Remembering God's faithfulness gives strength for the present. Recall one evidence of His goodness, give thanks, and let gratitude renew your expectation without denying today's challenges.",
  "Dependence on God": "You do not have to manufacture spiritual power by force of will. Surrender the need to control every outcome, seek the Spirit's guidance and take the obedient step you can take.",
  "Integrity and Mercy": "Spiritual maturity is visible in justice, mercy and humility. In one conversation or decision today, choose what is fair, compassionate and free from pride.",
  "Kingdom Labourers": "The need is greater than any one person's effort. Pray for faithful workers, and consider how you can participate through prayer, giving, mentoring or direct service.",
  "Manifestation": "Let the hope of God's work in His people shape your conduct now. Become someone whose patience, courage and love offer a credible glimpse of Christ to a waiting world.",
  "Wholeness and Wellbeing": "God cares about the whole person. Attend to your spiritual life and your practical wellbeing, and extend the same thoughtful care to those around you.",
  "Fruitfulness": "Fruit grows from abiding, not frantic striving. Make space to remain close to Christ through prayer and obedience, then let that closeness shape the fruit people experience from you.",
  "Church Community": "Unity is more than being in the same room; it is choosing love across differences. Take a step toward peace, encouragement or reconciliation where it is appropriate.",
  "Hope and Future": "Uncertainty does not cancel God's invitation to hope. Plan responsibly, act faithfully in the present and refuse to let fear alone write the story of your future.",
  "Strength in Christ": "You are not required to rely on your own strength alone. Face today's responsibility with dependence on Christ, asking for endurance and wisdom rather than an easy escape.",
  "Trust and Direction": "Trust is practised through decisions, not only declared in words. Bring your plans before God, seek wise counsel and take the next honest step without pretending to know everything.",
  "Purpose and Hope": "God can work through complicated seasons without calling evil good. Keep faith, choose what is right in the present and remain open to the good He can bring from what you cannot control.",
  "The Love of God": "The foundation is God's love, revealed in Christ. Receive that love with humility, and let it loosen fear and move you toward love for God and your neighbour.",
} satisfies Record<string, string>;

export const verses: readonly Verse[] = [
  { reference: "Isaiah 8:18", text: "Behold, I and the children whom the LORD hath given me are for signs and for wonders in Israel from the LORD of hosts, which dwelleth in mount Zion.", theme: "Living Wonders", meditation: meditations["Living Wonders"] },
  { reference: "Ephesians 4:12", text: "For the perfecting of the saints, for the work of the ministry, for the edifying of the body of Christ:", theme: "Equipping Believers", meditation: meditations["Equipping Believers"] },
  { reference: "Matthew 5:16", text: "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.", theme: "Impact and Service", meditation: meditations["Impact and Service"] },
  { reference: "Jeremiah 1:10", text: "See, I have this day set thee over the nations and over the kingdoms, to root out, and to pull down, and to destroy, and to throw down, to build, and to plant.", theme: "Building Kingdom", meditation: meditations["Building Kingdom"] },
  { reference: "John 10:10", text: "I am come that they might have life, and that they might have it more abundantly.", theme: "Abundant Life", meditation: meditations["Abundant Life"] },
  { reference: "Acts 1:8", text: "But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth.", theme: "Spirit-Empowered Witness", meditation: meditations["Spirit-Empowered Witness"] },
  { reference: "Ephesians 2:10", text: "For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them.", theme: "Purpose and Good Works", meditation: meditations["Purpose and Good Works"] },
  { reference: "2 Corinthians 5:17", text: "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.", theme: "Transformation", meditation: meditations["Transformation"] },
  { reference: "Isaiah 60:1", text: "Arise, shine; for thy light is come, and the glory of the LORD is risen upon thee.", theme: "Rise and Shine", meditation: meditations["Rise and Shine"] },
  { reference: "Habakkuk 2:14", text: "For the earth shall be filled with the knowledge of the glory of the LORD, as the waters cover the sea.", theme: "Kingdom Influence", meditation: meditations["Kingdom Influence"] },
  { reference: "Matthew 28:19-20", text: "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you.", theme: "The Great Commission", meditation: meditations["The Great Commission"] },
  { reference: "1 Peter 4:10", text: "As every man hath received the gift, even so minister the same one to another, as good stewards of the manifold grace of God.", theme: "Serving Others", meditation: meditations["Serving Others"] },
  { reference: "Proverbs 11:25", text: "The liberal soul shall be made fat: and he that watereth shall be watered also himself.", theme: "Generosity and Empowerment", meditation: meditations["Generosity and Empowerment"] },
  { reference: "Galatians 6:9", text: "And let us not be weary in well doing: for in due season we shall reap, if we faint not.", theme: "Perseverance", meditation: meditations["Perseverance"] },
  { reference: "Romans 12:11", text: "Not slothful in business; fervent in spirit; serving the Lord;", theme: "Diligence and Service", meditation: meditations["Diligence and Service"] },
  { reference: "Philippians 1:6", text: "Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ:", theme: "Growth and Completion", meditation: meditations["Growth and Completion"] },
  { reference: "Isaiah 61:1", text: "The Spirit of the Lord GOD is upon me; because the LORD hath anointed me to preach good tidings unto the meek; he hath sent me to bind up the brokenhearted, to proclaim liberty to the captives, and the opening of the prison to them that are bound;", theme: "Restoration and Freedom", meditation: meditations["Restoration and Freedom"] },
  { reference: "Psalm 126:3", text: "The LORD hath done great things for us; whereof we are glad.", theme: "Testimony and Wonder", meditation: meditations["Testimony and Wonder"] },
  { reference: "Zechariah 4:6", text: "Not by might, nor by power, but by my spirit, saith the LORD of hosts.", theme: "Dependence on God", meditation: meditations["Dependence on God"] },
  { reference: "Micah 6:8", text: "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?", theme: "Integrity and Mercy", meditation: meditations["Integrity and Mercy"] },
  { reference: "Matthew 9:37-38", text: "Then saith he unto his disciples, The harvest truly is plenteous, but the labourers are few; Pray ye therefore the Lord of the harvest, that he will send forth labourers into his harvest.", theme: "Kingdom Labourers", meditation: meditations["Kingdom Labourers"] },
  { reference: "Romans 8:19", text: "For the earnest expectation of the creature waiteth for the manifestation of the sons of God.", theme: "Manifestation", meditation: meditations["Manifestation"] },
  { reference: "3 John 1:2", text: "Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth.", theme: "Wholeness and Wellbeing", meditation: meditations["Wholeness and Wellbeing"] },
  { reference: "John 15:5", text: "I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing.", theme: "Fruitfulness", meditation: meditations["Fruitfulness"] },
  { reference: "Psalm 133:1", text: "Behold, how good and how pleasant it is for brethren to dwell together in unity!", theme: "Church Community", meditation: meditations["Church Community"] },
  { reference: "Jeremiah 29:11", text: "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.", theme: "Hope and Future", meditation: meditations["Hope and Future"] },
  { reference: "Philippians 4:13", text: "I can do all things through Christ which strengtheneth me.", theme: "Strength in Christ", meditation: meditations["Strength in Christ"] },
  { reference: "Proverbs 3:5-6", text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.", theme: "Trust and Direction", meditation: meditations["Trust and Direction"] },
  { reference: "Romans 8:28", text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.", theme: "Purpose and Hope", meditation: meditations["Purpose and Hope"] },
  { reference: "John 3:16", text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.", theme: "The Love of God", meditation: meditations["The Love of God"] },
];
