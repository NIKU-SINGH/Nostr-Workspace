import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Profile from "./Profile";
import Search from "./Search";
import Chat from "./Chat";
function ChatLayout() {
  const router = useRouter();

  return (
    <div className="w-full h-[100vh] flex flex-row shadow-xl ">
      {/* Sidebar Options */}
      <div className="h-full w-20 shadow-2xl  bg-gray-900 rounded p-2 space-y-6 items-center flex flex-col">
        {/* Logo */}
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <Image
            src="/images/logo2.png"
            height={1200}
            width={1200}
            alt="logo"
            className="w-14 bg-gray-800 p-2 rounded-lg"
          />
        </div>

        {/* Home Icon */}
        <div className="rounded-lg cursor-pointer hover:bg-gray-800 h-12 w-12 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 "
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
        </div>

        {/* Message Icon */}
        <div className="rounded-lg cursor-pointer hover:bg-gray-800 h-12 w-12 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* White board Icon */}
        <div className="rounded-lg cursor-pointer hover:bg-gray-800 h-12 w-12 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.54 15h6.42l.5 1.5H8.29l.5-1.5zm8.085-8.995a.75.75 0 10-.75-1.299 12.81 12.81 0 00-3.558 3.05L11.03 8.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 001.146-.102 11.312 11.312 0 013.612-3.321z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Seetings Icon */}
        <div className="absolute bottom-4 rounded-lg cursor-pointer hover:bg-gray-800 h-12 w-12 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Contacts */}
      <div className="h-full w-80 bg-gray-800">
        <div className="h-16 bg-gray-700 p-2 flex items-center shadow-xl">
          <h1 className="text-lg font-medium ">Messages</h1>
          <div className="bg-gray-400 text-sm rounded-full ml-1 w-6 h-6 flex items-center justify-center">
            12
          </div>
        </div>
        {/* Search  */}
        <div>
          <Search />
        </div>

        {/* Profile */}

        <Profile />
        <Profile />
        <Profile />
      </div>

      {/* Main chat */}
      <div className="h-full w-3/4 flex-col flex bg-gray-900">

        {/* Chat Header */}
        <div className="h-16 bg-gray-800 w-full p-2 flex items-center shadow-xl justify-between">
          <div className="text-lg font-medium flex">
            {/* Profile Photo */}
            <div className="cursor-pointer">
              <Image
                src="/images/john.png"
                height={1200}
                width={1200}
                alt="logo"
                className="w-14 rounded-full"
              />
            </div>

            {/* name */}
            <div className="flex flex-col ml-2 items-left justify-center ">
              <h1 className="font-semibold">Profile Name</h1>

              {/* Status*/}
              <div className="font-light text-sm">Online</div>
            </div>
          </div>

          <div className="flex items-center ">
            {/* Call */}

            <div className=" bg-gray-600 rounded px-2 h-10 cursor-pointer flex justify-center items-center mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-gray-300"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-gray-300 text-sm ml-1">Call</p>
            </div>

            {/* Video Call */}
            <div className=" bg-gray-600 rounded px-2 h-10 cursor-pointer flex justify-center items-center mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-gray-300"
              >
                <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
              </svg>
              <p className="text-gray-300 text-sm ml-1">Video </p>
            </div>
          </div>
        </div>

        {/* Main Body of Chat */}
        <div className="w-full h-full">
          <Chat />
        </div>
      </div>

      {/* Extra Section */}
      <div className="h-full w-96 bg-gray-800 hidden md:inline-block">
        <div className="h-16 bg-gray-900 w-full p-2 flex items-center shadow-xl">
          <h1 className="text-lg font-medium ">Directory</h1>
        </div>
      </div>
    </div>
  );
}

export default ChatLayout;
