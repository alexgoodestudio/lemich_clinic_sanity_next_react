import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getTeamMembers, urlFor } from "@/lib/sanity";

export const metadata = {
  title: "Our Team - Lemich Counseling",
  description: "Meet our team of licensed mental health professionals and administration staff.",
};

export default async function Team() {
  const teamMembers = await getTeamMembers();

  // Separate team members by category
  const owner = teamMembers.find(m => m.category === 'owner');
  const clinicians = teamMembers.filter(m => m.category === 'clinician');
  const administration = teamMembers.filter(m => m.category === 'admin');

  return (
    <>
      <Nav />
      <div className="bg-slate-50 py-12">
        <div className="container mx-auto">
          <h1 className="text-4xl barlow text-start mb-1">
            Meet Our Team
          </h1>

          {/* Owner Section */}
          {owner && (
            <div className="row bg-white shadow-lg p-4 mb-5 mt-5">
              <div className="mx-auto col-lg-3">
                <div className="w-60 h-60 mx-auto rounded-full bg-gray-200 overflow-hidden relative">
                  <Image
                    src={owner.image ? urlFor(owner.image).width(400).height(400).url() : '/placeholder-avatar.png'}
                    alt={owner.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 240px, 240px"
                  />
                </div>
              </div>
              <div className="col-lg-9 col-sm-12 text-start">
                <h3 className="text-lg mt-4">
                  {owner.name}
                </h3>
                <p className="text-gray-600 mt-2">{owner.role}</p>
                <p className="text-gray-700 mt-4 text-sm text-justify">
                  {owner.description}
                </p>
              </div>
            </div>
          )}

          {/* Clinicians Section */}
          <h2 className="text-4xl thin text-center text-gray-800 mb-8">
            Clinicians
          </h2>
          <p className="text-start p-lg-3 text-sm p-2 border rounded bg-slate-100">
            Our counselors have a Master's Degree in Mental Health Counseling and are licensed by Virginia to perform empirically validated medical counseling.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinicians.map((member, index) => (
              <div
                key={member._id || index}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="w-60 h-60 mx-auto rounded-full bg-gray-200 mb-4 overflow-hidden relative">
                  <Image
                    src={member.image ? urlFor(member.image).width(400).height(400).url() : '/placeholder-avatar.png'}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                    sizes="(max-width: 768px) 240px, 240px"
                  />
                </div>
                <h4 className="text-lg manrope-semibold text-gray-800">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="text-sm text-gray-700 mt-2 text-justify">{member.description}</p>
                {member.specialties && (
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-bold">Specialties: </span>
                    {member.specialties}
                  </p>
                )}
                {member.availability && (
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-bold">Availability: </span>
                    {member.availability}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Administration Section */}
          <h2 className="text-4xl thin text-center text-gray-800 mt-12 mb-8">
            Administration
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {administration.map((member, index) => (
              <div
                key={member._id || index}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="w-60 h-60 mx-auto rounded-full bg-gray-200 mb-4 overflow-hidden relative">
                  <Image
                    src={member.image ? urlFor(member.image).width(400).height(400).url() : '/placeholder-avatar.png'}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                    sizes="(max-width: 768px) 240px, 240px"
                  />
                </div>
                <h3 className="text-lg manrope-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="text-sm text-gray-700 mt-2 text-justify">{member.description}</p>
                {member.specialties && (
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-bold">Areas of Focus: </span>
                    {member.specialties}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
