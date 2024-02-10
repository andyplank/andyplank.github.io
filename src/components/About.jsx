import React from 'react';

const pics = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
const PictureRow = pics.map((e) => (
  <img key={e} alt={`andy-${e}`} src={`/pictures/${e}`} />
));

const About = () => (
  <div id="about" className="break container">
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-5 lg:col-span-3">
        <div className="">
          <img alt="andyplank-profile" src="/pictures/profile.jpg" className="px-4 md:px-0 object-cover rounded-md" />
        </div>
      </div>
      <div className="col-span-12 md:col-span-7 lg:col-span-9">
        <div className="p-4">
          <h2>About me</h2>
          <div className="text-3xl pb-1">Software Engineer, Purdue Alumn, Woodworker</div>
          <p>
            Currently, I am a Software Engineer at Microsoft where I work on improving
            Azure Service Performance.
            Typically, this involves finding bottlenecks in Windows Server and resolving them.
            Before work, I graduated from Purdue University with a Master&apos;s Degree
            in Computer Science.
            Outside of work, I enjoy small projects like building electronics, websites,
            and woodcraft.
            I have been an avid woodworker since I was 13 and made a Christmas tree in woodshop.
            If you are interested in that sort of thing, check out my projects down below.
            I also like staying active playing tennis, golf, or just working out.
          </p>
        </div>
      </div>
    </div>
    <div className="hidden md:block">
      <div className="grid grid-cols-5 gap-5 mt-2 pt-2 border-t-2 px-2 mt-3">
        {PictureRow}
      </div>
    </div>
  </div>
);

export default About;
