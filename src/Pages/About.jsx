import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
      <Nav />
      <div className="!px-6">
        <section className="rounded-xl !px-6 !py-10 bg-gray-50 text-gray-800">
          <div className="max-w-7xl !mx-auto">
            <h1 className="text-3xl font-bold !mb-4 text-red-800">About Us</h1>

            {/* Text + Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 !mb-10">
              <div className="text-justify text-lg space-y-4">
                <p>
                  As one of the leading services providers operating in the real
                  estate domain, at Pinnacle Group, we are offering host of
                  services according to the various realty needs and
                  requirements of the clients. Located in Mohali, Punjab, &
                  Wolverhampton London, we are offering services such as Buying
                  Property Services, Selling Property Services, Leasing Property
                  Services and Property Loan Consultancy.
                </p>
                <p>
                  As a reliable service provider, we are offering services
                  keeping in mind the various realty needs and requirements of
                  the clients, providing them with good and effective realty
                  solution on a prompt basis. Since the incorporation of the
                  company in the year 2007, we have benefitted many clients by
                  providing world-class services at the most reasonable charges.
                  Keeping in mind the convenience of the clients we are offering
                  prompt and reliable services which are highly appreciated by
                  the clients.
                </p>
                <p>
                  Under the guidance and supervision of our owner, Mr. Ajay
                  Banger, we have achieved great heights in the real estate
                  domain. We have with us a team of highly efficient and
                  hardworking professionals whose main concern is to provide
                  full client satisfaction while offering realty services. Our
                  professionals understand the exact need and requirement of the
                  clients and accordingly provide services to ensure all the
                  needs and requirements of the clients are being properly
                  catered to.
                </p>
              </div>

              <div>
                <img
                  src="/logo.png"
                  alt="image"
                  className="rounded-xl border-2 border-red-900 shadow-lg w-full"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <tbody className="text-left text-sm">
                  <tr className="bg-gray-100">
                    <th className="!p-3 font-semibold border border-gray-200">
                      Name of CEO
                    </th>
                    <td className="!p-3 border border-gray-200">Ajay Banger</td>
                  </tr>
                  <tr>
                    <th className="!p-3 font-semibold border border-gray-200">
                      Business Type
                    </th>
                    <td className="!p-3 border border-gray-200">
                      Real Estate Consultant
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <th className="!p-3 font-semibold border border-gray-200">
                      Year of Establishment
                    </th>
                    <td className="!p-3 border border-gray-200">2007</td>
                  </tr>
                  <tr>
                    <th className="!p-3 font-semibold border border-gray-200">
                      Operating Cities
                    </th>
                    <td className="!p-3 border border-gray-200">Mohali</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <th className="!p-3 font-semibold border border-gray-200">
                      Rera No
                    </th>
                    <td className="!p-3 border border-gray-200">
                      PBRERA-SAS80-REA0303
                    </td>
                  </tr>
                  <tr>
                    <th className="!p-3 font-semibold border border-gray-200">
                      Legal Status of Firm
                    </th>
                    <td className="!p-3 border border-gray-200">
                      Pvt.Ltd.Company
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
