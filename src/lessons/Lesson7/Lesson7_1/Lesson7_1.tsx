import { Suspense, useState } from "react";
import TabButton from "./TabButton";
import AboutTab from "./AboutTab";
import PostsTab from "./PostsTab";
import ContactTab from "./ContactTab";

const Lesson7_1 = () => {
  const [tab, setTab] = useState("about");
  // const [isPending, startTransition] = useTransition();

  function selectTab(nextTab: string) {
    // startTransition(() => {
    setTab(nextTab);
    // });
  }

  // if (isPending) {
  //   return <b className="pending">loading</b>;
  // }

  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <div className="flex gap-4">
          <TabButton
            isActive={tab === "about"}
            onClick={() => selectTab("about")}
          >
            About
          </TabButton>
          <TabButton
            isActive={tab === "posts"}
            onClick={() => selectTab("posts")}
          >
            Posts (slow)
          </TabButton>
          <TabButton
            isActive={tab === "contact"}
            onClick={() => selectTab("contact")}
          >
            Contact
          </TabButton>
        </div>
        <hr className="mt-4" />
        {tab === "about" && <AboutTab />}
        {tab === "posts" && <PostsTab />}
        {tab === "contact" && <ContactTab />}
      </Suspense>
    </div>
  );
};

export default Lesson7_1;
