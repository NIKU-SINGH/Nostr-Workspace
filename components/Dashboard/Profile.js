import React from "react";
import Image from "next/image";

function Profile() {
  return (
    <div className="hover:bg-slate-700 p-2 rounded-lg flex cursor-pointer my-2">
      {/* Profile Photo */}
      <div>
        <Image src="/images/john.png" height={1200} width={1200} alt="logo" className="w-14 rounded-full"/>
      </div>

      {/* name */}
      <div className="flex flex-col ml-2 items-left justify-center ">
        <h1 className="font-semibold">Profile Name</h1>

        {/* Previous chat history */}
        <div className="font-light text-sm">Prev chat history</div>
      </div>
    </div>
  );
}

export default Profile;
