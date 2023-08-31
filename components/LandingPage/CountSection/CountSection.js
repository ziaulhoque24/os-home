"use client";

import SectionHeader from "@/components/CommonUi/SectionHeader";
import CardForCount from "./CardForCount";

export default function CountSection() {
  return (
    <>
      <div className='countSectionBg'>
        <div className='container  flex flex-col gap-5 py-10 md:py-32 rounded-xl'>
          <SectionHeader
            title={"Innovation & Inspiration"}
            subtitle={"That's who we are"}
          />
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
            <CardForCount
              label={"Year we were founded"}
              count={2018}
              color='#FF5252'
            />
            <CardForCount
              label={"Monthly active users"}
              count={"100+"}
              color='#6600F2'
            />
            <CardForCount
              label={"Members in our remote team"}
              count={"20+"}
              color='#00D280'
            />
            <CardForCount
              label={"Countries using our products"}
              count={"15+"}
              color='#FFBE4E'
            />
          </div>
        </div>
      </div>
    </>
  );
}
