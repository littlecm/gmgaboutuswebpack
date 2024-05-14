import { useEffect, useState } from 'react';

export default function AboutUs({ dealership }: { dealership: string }) {
  const [dealershipName, setDealershipName] = useState(dealership || 'Our Dealership');

  useEffect(() => {
    const dealershipMap: { [key: string]: string } = {
      'abcmotors.com': 'ABC Motors',
      'xyzautos.com': 'XYZ Autos',
      'updatingspecials2024.vercel.app': 'It Worked Motors',
      'jsfiddle.net': 'JSFiddle Motors Inc.',
    };

    const currentHost = window.location.hostname;
    const defaultName = dealership || 'Our Dealership'; // Default name if no match is found

    setDealershipName(dealershipMap[currentHost] || defaultName);
  }, [dealership]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 dark:bg-gray-950">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <CarIcon className="h-12 w-12 text-primary" />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-50">{dealershipName}</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          {dealershipName} is proud to be part of the Garber Automotive Group. Whether you’re looking for a new or quality used vehicle, our knowledgeable sales staff is here to help you. We offer assistance with vehicle financing and auto loans to ensure you bring your dream car home today. We also have a state-of-the-art service center and certified service technicians to handle all your vehicle’s repair and maintenance needs.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Garber Automotive Group has been family owned and operated since 1907. Garber Management Group, based out of Saginaw, Michigan, is the umbrella organization for 21 new-car dealerships that represent 16 franchises across six states and is currently one of the top 20 largest privately held companies in Michigan outside of Detroit.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          The Garber organization also includes Gateway Financial Solutions, one of the nation’s largest used-vehicle lenders, and RightWay Automotive, an independent used-vehicle retailer with over 35 locations in the Midwest. In total, the organization employs over 2,000 people and generates $1.2 billion in annual sales.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Since 1907, we’ve been in the business of creating a customer experience that has brought customers back time-and-time again. That’s why we always say, “You’ll do better at {dealershipName}!” With a knowledgeable and experienced staff, wide selection of new and used vehicles, and easy financing, {dealershipName} is your one-stop shop for all your vehicle needs. Call us today or visit us at our dealership.
        </p>

        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-50">VISION STATEMENT</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6">“To be the BEST automotive sales and repair operation in every market we serve.”</p>

        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-50">MISSION STATEMENT</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6">“We’re only doing our jobs when we create an experience for the customers for which they choose to return and do business with us again.”</p>

        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-50">COMPANY VALUES</h3>
        <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mb-6">
          <li>Honesty: Truthful at all times.</li>
          <li>Respect: To show consideration and honor for each other.</li>
          <li>Empathy: To be able to understand another’s position.</li>
          <li>Integrity: To be of good sound moral principle, trustworthy, sincere.</li>
          <li>Pride: Sense of self-worth. Making a difference in people’s lives.</li>
          <li>Work Ethic: Working as a team to meet or exceed expectations.</li>
        </ul>

        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-50">HISTORY OF THE COMPANY</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          The year was 1907 and many thought the horse and buggy would continue to be the way to travel. One notable exception was a young farm implement salesman of exceptional ability and bold vision. His name was Guy S. Garber and he saw the automobile as the vehicle of the future.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Garber’s reputation for sales caught the eye of Billy Durant, founder of General Motors. At Durant’s encouragement, Guy became a traveling sales representative for Buick at age 23. His job was to establish a retail network, opening dealerships in Battle Creek and Saginaw. In 1910, Buick withdrew from Saginaw due to a lack of resources. Guy, along with a partner, bought Buick’s interest, establishing Garber Buick Company.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Garber Buick grew to become a GM model for salesmanship, efficiency, and customer service, a legacy that has continued with his successors. Guy was rewarded by being granted one of only 13 distributorships in the U.S., allowing him to wholesale Buick products and parts to dealerships from Saginaw to the Straits of Mackinac.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Guy was a compassionate and charitable man, making service to the community a priority in his life. He founded the Saginaw Society for Crippled Children, was one of the original organizers of the United Way, built the Garber Tennis Courts, and served on the Saginaw City School Board, to name a few.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          His long and productive affiliation with GM lasted nearly 60 years, through the Great Depression and two World Wars. When automotive pioneer Guy Garber died in 1965, the world lost a significant member of automotive history.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Richard Garber Sr., son of Guy Garber and who had been actively managing Garber Buick Company, became president and owner until his death in 1972. Like his father, Richard was a civic leader in every sense of the word. Richard Garber was succeeded by Norman F. Geyer as president. Norm was married to Maxine Garber and was Guy Garber’s son-in-law. He successfully guided the Buick store for eight years, during the trying times of the 1970’s, until he passed the torch to Richard J. Garber Jr., in 1980.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Guy S. Garber’s grandson, Richard J. Garber, Jr., was the third generation to take the helm of the company in its 73rd year of operation. When he became president, he was the youngest Buick dealer for a dealership of its size in the nation.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          With Garber Buick enjoying outstanding sales and service performance, it became Dick Garber’s objective to acquire additional dealerships and grow the organization. The first acquisition was in 1986, with Garber Nissan in Saginaw, Michigan, and as of 2020 the organization has grown to include 21 new car dealerships, RightWay Automotive, an independent used vehicle retailer with over 35 locations, and Gateway Financial Solutions, a subprime lending company.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Richard J. Garber Jr. shares his family’s commitment to the community. He has served on the board of directors for numerous charitable and community organizations in the Great Lakes Bay Region, and has led three capital campaigns for regional organizations including the YMCA, the CAN Council, and the Temple Theatre. Under his leadership, the Garber organization gives back over $1 million to community organizations every year.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Giving back to the community is part of the culture of the company and Garber employees dedicate thousands of community service hours each year to local organizations. In 2002, Garber also bought an OHL franchise, the Saginaw Spirit as a contribution to the region, which plays at the Dow Event Center in Saginaw.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          The organization today is a long way from the 1907 version, but important traditions live on: dedication to service, customers, and community, a loyal staff, and a forward-looking vision. One that echoes the spirit of a young farm implement salesman who took thousands of Mid-Michigan residents out of the buggy and put them behind the wheel.
        </p>
      </div>
    </div>
  );
}

function CarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}
