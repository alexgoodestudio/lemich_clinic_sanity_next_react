// Migration script to import existing blog posts and team members into Sanity
import { createClient } from '@sanity/client'
import { blogPosts } from './blogData.js'
import 'dotenv/config'

// Initialize Sanity client with write permissions
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // Need write token
})

// Helper to convert HTML content to Portable Text blocks
function htmlToPortableText(htmlContent) {
  // This is a simplified conversion - you'll manually format in Studio
  // Splits by paragraphs and common HTML tags
  const blocks = []
  
  // Remove HTML tags and split into paragraphs
  const text = htmlContent.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  const paragraphs = text.split(/\n\n+/)
  
  paragraphs.forEach(para => {
    if (para.trim()) {
      blocks.push({
        _type: 'block',
        _key: Math.random().toString(36).substr(2, 9),
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: para.trim(),
            marks: [],
          },
        ],
        markDefs: [],
      })
    }
  })
  
  return blocks
}

// Team member data
const teamMembers = [
  {
    name: "Gregory C. Lemich, Ph.D., LPC",
    role: "Owner and Clinical Director",
    description: "Dr. Lemich is an independently-licensed professional counselor in Norfolk, Virginia and is the founder of the Lemich Clinic. He received his MS from Loyola University Maryland and his PhD from Old Dominion University. He counseled at Johns Hopkins, Sentara, Veterans Affairs, and for various private practices. As a professor at Old Dominion University, he is well versed in many clinical methods and customizing the counseling experience. His clinical specializations are active duty military, suicidal ideations, and PTSD.",
    specialties: "",
    availability: "",
    category: "owner",
    order: 0
  },
  {
    name: "Kezia McNair, MSeD, Resident in Counseling (VA)",
    role: "Clinician",
    description: "Kezia holds a Masters in Mental Health Counseling from Old Dominion University and Bachelors in Human Services. She has counseled for Chesapeake Regional Hospital and has 8 years experience with the Department of Veteran Services. She thrives at helping military members identify stressors, learn new tools for change, and find adjustments to improve wellness.",
    specialties: "",
    availability: "In-Person and Telehealth",
    category: "clinician",
    order: 1
  },
  {
    name: "Anthony Ladikos, MSeD, Resident in Counseling (VA)",
    role: "Clinician",
    description: "Anthony holds a Masters in Mental Health Counseling from Old Dominion University and a Bachelors in Psychology with a minor in Criminal Justice. He has counseled at the LGBT Life Center and the EVMS HOPES clinic and previously worked as a substitute grade-school teacher. He is supportive, compassionate, and attentive, able to focus on deep-seeded emotions and concerns of the past.",
    specialties: "Integrated and Trauma-Informed CBT",
    availability: "In-Person and Telehealth",
    category: "clinician",
    order: 2
  },
  {
    name: "Lauren Murdock, MSeD, Resident in Counseling (VA)",
    role: "Clinician",
    description: "Lauren holds a Masters in Mental Health Counseling from Old Dominion University and a Bachelors in Political Science. She is a Navy veteran spouse and mother, having maintained work and home life while her husband was serving deployments overseas. She has counseled for the Farley Center and the Academic Resource Center at Old Dominion University. She thrives at helping military members work through stress, trauma, family challenges, and all that military life throws at us.",
    specialties: "",
    availability: "Telehealth",
    category: "clinician",
    order: 3
  },
  {
    name: "Sarah Rieke, MSeD, Resident in Counseling (VA)",
    role: "Clinician",
    description: "Sarah holds a Masters in Mental Health Counseling from Old Dominion University and a Bachelor's Degree in Psychology from Liberty University. She has counseled at Chesapeake Regional Medical Center in both inpatient and outpatient settings, including providing mental health support services to the hospital staff. She has a wide range of clinical experience to include depression, anxiety, relationship difficulties, postpartum concerns, grief and loss, trauma, and coping with life transitions. Sarah fosters a warm, trusting therapeutic relationship with her clients to help facilitate their personal mental health and wellness goals.",
    specialties: "EMDR",
    availability: "In-Person and Telehealth",
    category: "clinician",
    order: 4
  },
  {
    name: "Kiana Dabier Moghaddam, MSeD, Resident in Counseling (VA)",
    role: "Clinician",
    description: "Kiana holds a Masters in Mental Health Counseling from Old Dominion University and has a Bachelor's Degree in Public Health. She counseled at Sunrise Counseling and worked as a Case Manager and Victim Advocate at Samaritan House. Kiana has extensive experience in refugee and immigrant resettlement challenges, human trafficking, domestic violence, sexual assault, and addiction. As a bicultural counselor and a Marine Corps spouse, she is fiercely committed to creating an environment of acceptance, collaboration, empowerment, and growth.",
    specialties: "EMDR",
    availability: "Telehealth",
    category: "clinician",
    order: 5
  },
  {
    name: "Elena Little, MSeD, Resident in Counseling (VA)",
    role: "Clinician",
    description: "Elena holds a Masters in Mental Health Counseling from Old Dominion University and has a bachelor's degree in Psychology. She has provided counseling services at Virginia Beach Psychiatric Center's inpatient and partial hospitalization programs. She has focused on substance abuse, psycho-educational, dual diagnose, trauma-informed care, and mood disorders. She supports those seeking help to with new tools to combat stressors, understand themselves deeper, and live more meaningful lives.",
    specialties: "EMDR",
    availability: "In-Person and Telehealth",
    category: "clinician",
    order: 6
  },
  {
    name: "Robert Armbruster (Robie), MSeD, Resident in Counseling (VA)",
    role: "Clinician",
    description: "Robie holds a Masters in Mental Health Counseling from Old Dominion University, a Masters in Systems Engineering from Naval Postgraduate School, and a Masters in Natural Science (Psychology) from the University of Cambridge. He served 24 years in the U.S. Navy. He has counseled at the Faye Bonnick Counseling Center, specializing in aiding couples recover from betrayal trauma. He creates a calm, welcoming environment for exploration of the root causes of current issues.",
    specialties: "EMDR, Grief-Informed Counseling, Complex Trauma, and Addiction.",
    availability: "In-Person and Telehealth",
    category: "clinician",
    order: 7
  },
  {
    name: "Ashley Casey, MSeD, Resident in Counseling (VA)",
    role: "Clinician",
    description: "Ashley holds a Masters in Mental Health Counseling from Old Dominion University and has a bachelor's degree in Geography. She has provided counseling services at the LGBT Life Center, Chesapeake Regional Healthcare, and has worked in private practice. Her clinical experience includes working with LGBT+ clients, exploring relationship and attachment issues, anxiety, depression, gender dysphoria, and alcohol use disorder. As a veteran and military spouse herself, Ashley has a passion for working with military clients and their families. She seeks to meet clients where they're at, and strives to provide a warm and accepting environment for all.",
    specialties: "ACT",
    availability: "In-Person and Telehealth",
    category: "clinician",
    order: 8
  },
  {
    name: "Hayli Stone, MSeD, Resident in Counseling (VA)",
    role: "Clinician",
    description: "Hayli holds a Masters Degree in Mental Health Counseling from Old Dominion University and holds a Bachelor's Degree in Liberal Studies from SUNY Purchase. She has provided counseling services at Chesapeake Regional Hospital and Grassfield Primary Care Clinic. Her clinical experience includes anxiety, depression, trauma, relationship difficulties and LGBTQ affirming care. She is committed to providing a warm and nonjudgmental environment in which clients are able to feel heard and supported as they work towards their personal goals.",
    specialties: "EMDR",
    availability: "In-Person and Telehealth",
    category: "clinician",
    order: 9
  },
  {
    name: "TJ Meltesen, MSeD, Resident in Counseling (VA)",
    role: "Clinician",
    description: "TJ holds a Masters in Mental Health Counseling at ODU. She holds a Bachelor's degree in Rehabilitation Psychology from the University of Wisconsin-Madison. Having served in the Navy, TJ possesses a valuable understanding of military culture and the challenges of transitioning out of the military. She has a strong background in supporting families and individuals dealing with developmental, physical, and neurodivergent concerns. TJ recognizes the profound impact of bereavement and grief on various aspects of life. She offers a space that is both non-judgmental and collaborative. Her passion lies in helping individuals tap into their inner strengths and embrace authenticity.",
    specialties: "",
    availability: "In-Person and Telehealth",
    category: "clinician",
    order: 10
  },
  {
    name: "Amanda Henderson, MSeD, Resident in Counseling (VA)",
    role: "Clinician",
    description: "Amanda holds a Masters in Mental Health Counseling at ODU, and currently holds a B.S. in psychology and human services. As both a Navy veteran and military spouse, she has extensive knowledge and experience surrounding military issues and culture. Amanda has served as a career counselor and sexual assault victim advocate during her time in the military; she also has experience with domestic violence issues from her time working at a women's shelter. Utilizing an eclectic counseling approach, she collaborates closely with clients to achieve their goals, fostering a nurturing environment that supports healing and personal growth.",
    specialties: "",
    availability: "In-Person and Telehealth",
    category: "clinician",
    order: 11
  },
  {
    name: "Amy Garner, MSeD, Resident in Counseling (VA)",
    role: "Clinician",
    description: "Amy holds a Masters in Mental Health Counseling at ODU. She currently holds a B.A in psychology and has over 20 years of military-related experience as a Navy spouse, mother, and volunteer. By working hand in hand with commands, sailors, and spouses, Amy developed a unique perspective on the challenges that come with military life. As a parent, she gained extensive experience working with children with disabilities and the foster care/adoption communities. Clinically, Amy has worked at Chesapeake Regional Medical Center, counseling in both the inpatient and outpatient settings. She has experience working with military and life transitions, depression, anxiety, postpartum concerns, trauma, and life stressors. Amy utilizes a holistic approach, collaborating with clients to achieve their goals. Her warm, compassionate demeanor creates a safe space for clients to explore their concerns and embrace personal growth.",
    specialties: "",
    availability: "In-Person and Telehealth",
    category: "clinician",
    order: 12
  },
  {
    name: "Crystal Goulart, MSeD, Resident in Counseling (VA)",
    role: "Clinician",
    description: "Crystal holds a Masters in Mental Health Counseling at ODU, with an expected graduation date of December 2024. Drawing from her own personal experiences as a Navy veteran and former foster youth, Crystal has developed a profound belief in the transformative power of counseling. With a genuine passion for helping others, Crystal creates a supportive environment where clients feel heard and valued. Each session with Crystal is a partnership focused on understanding individual experiences, validating emotions, and setting achievable goals. Her approach emphasizes trust, empathy, and respect, ensuring that clients feel empowered on their journey towards healing and personal growth. Crystal is committed to making a positive difference in the lives of those she serves, leveraging her background to offer compassionate support and understanding.",
    specialties: "",
    availability: "In-Person and Telehealth",
    category: "clinician",
    order: 13
  },
  {
    name: "Morgan Templeton, Intern in Counseling (VA)",
    role: "Clinician",
    description: "Morgan is currently an intern pursuing her Master's in Mental Health Counseling at ODU, with an expected graduation date of August 2025. She currently holds a B.S. in psychology and has previous experience working with military members at a psychology clinic in Germany. As a military dependent, she has a valuable understanding of military culture and issues, as well as the effects of these issues on military families. Her eclectic approach emphasizes creating an environment that fosters feelings of safety, empowerment, and trust.",
    specialties: "",
    availability: "In-Person and Telehealth",
    category: "clinician",
    order: 14
  },
  {
    name: "Emily Nardone, Intern in Counseling (VA)",
    role: "Clinician",
    description: "Emily N. is a practicum student pursuing her Master's in Clinical Mental Health Counseling at Old Dominion University. She holds a Bachelor's degree in Psychology and Neuroscience from Elon University. With strong personal ties to the military through her father and partner, Emily has a deep understanding of military culture and is passionate about supporting service members and their families. Emily's approach is focused on helping clients achieve their goals while promoting healing and personal growth. She is dedicated to creating a supportive and welcoming environment where clients feel comfortable and valued.",
    specialties: "",
    availability: "In-Person and Telehealth",
    category: "clinician",
    order: 15
  },
  {
    name: "Karen Rominger",
    role: "Case Manager and Office Coordinator",
    description: "Karen holds a Masters in Public Health from Eastern Virginia Medical School and a Bachelors in Biology from Christopher Newport University with a minor in Spanish. In her position as Office Manager, she works closely with clients to ensure their experience at The Lemich Clinic runs smoothly. As a Navy spouse and mother, she can relate to many of the challenges that come with the military lifestyle. In her role as a Case Manager, she will work with you to ensure you have access to various resources to help you along your journey to bettering your health.",
    specialties: "Billing, Scheduling, Military Resources",
    availability: "",
    category: "admin",
    order: 16
  },
  {
    name: "Kalyn Lindelof",
    role: "Psych Tech and Assistant Office Coordinator",
    description: "Kalyn holds a Bachelors in Psychology from Southern Virginia University and experience in office management. While not yet in a Masters program for Mental Health Counseling, she looks forward to it in the future. She is a Navy wife, and mother and therefore can relate and empathize with the difficulties of military life. Around the office Kalyn assigns psych assessments and tests for the clients in our office, does onboarding and scheduling, and other various tasks.",
    specialties: "Assessments, Scheduling, Onboarding",
    availability: "",
    category: "admin",
    order: 17
  },
  {
    name: "Maggie Perez",
    role: "Assistant Office Coordinator",
    description: "Maggie holds a Bachelors degree in Psychology from Columbia Southern University. In her position as admin associate she works closely with clients to ensure their experience at The Lemich Clinic runs smoothly. As a Navy veteran, Navy spouse and mother, she can relate to many of the challenges that come with the military lifestyle in both active duty, and off the ship life. In her role as an office assistant she will work with you to ensure you have access to various resources to help you along your journey to bettering your health.",
    specialties: "Resources, Scheduling, Onboarding, Assessments",
    availability: "",
    category: "admin",
    order: 18
  }
]

// Migrate Blog Posts
async function migrateBlogPosts() {
  console.log('Starting blog post migration...')
  
  for (const post of blogPosts) {
    try {
      // Convert HTML content to basic Portable Text
      // Note: You'll want to manually format these in Studio for best results
      const portableTextContent = htmlToPortableText(post.content)
      
      const blogDoc = {
        _type: 'blogPost',
        title: post.title,
        slug: {
          _type: 'slug',
          current: post.slug
        },
        author: post.author,
        date: post.date,
        description: post.description,
        content: portableTextContent
      }
      
      const result = await client.create(blogDoc)
      console.log(`✓ Created blog post: ${post.title}`)
    } catch (error) {
      console.error(`✗ Failed to create blog post: ${post.title}`, error.message)
    }
  }
  
  console.log('Blog post migration complete!')
}

// Migrate Team Members
async function migrateTeamMembers() {
  console.log('\nStarting team member migration...')
  console.log('Note: Images must be uploaded manually in Sanity Studio')
  
  for (const member of teamMembers) {
    try {
      const teamDoc = {
        _type: 'teamMember',
        name: member.name,
        role: member.role,
        description: member.description,
        specialties: member.specialties || '',
        availability: member.availability || '',
        order: member.order,
        category: member.category
        // Note: image field will be empty - upload images in Studio
      }
      
      const result = await client.create(teamDoc)
      console.log(`✓ Created team member: ${member.name}`)
    } catch (error) {
      console.error(`✗ Failed to create team member: ${member.name}`, error.message)
    }
  }
  
  console.log('\nTeam member migration complete!')
  console.log('\n⚠️  IMPORTANT: You still need to:')
  console.log('1. Upload team member images in Sanity Studio')
  console.log('2. Format blog post content in Studio (HTML was converted to plain text)')
}

// Run migrations
async function runMigration() {
  console.log('='.repeat(50))
  console.log('SANITY MIGRATION SCRIPT')
  console.log('='.repeat(50))
  
  try {
    await migrateBlogPosts()
    await migrateTeamMembers()
    
    console.log('\n' + '='.repeat(50))
    console.log('MIGRATION COMPLETE!')
    console.log('='.repeat(50))
    console.log('\nNext steps:')
    console.log('1. Go to https://lemich-clinic.sanity.studio')
    console.log('2. Upload team member images')
    console.log('3. Edit blog posts to format content properly')
    console.log('4. Add Site Settings document')
  } catch (error) {
    console.error('Migration failed:', error)
  }
}

// Run it
runMigration()