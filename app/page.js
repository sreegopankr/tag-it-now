"use client"

import { redirect } from "@node_modules/next/navigation";

export default function Home() {

  return (
    <div className="m-3">
      <h1 className="text-xl mb-4">Home Page</h1>
      <div className="flex gap-5">
        <button className="outline_btn" onClick={()=> redirect("/add-link")}>Add Link</button>
        <button className="outline_btn" onClick={()=> redirect("/view-links")}>View All Links</button>
      </div>
    </div>
  );
}
