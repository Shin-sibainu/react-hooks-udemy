import { useEffect, useState } from "react";
import { fetchBio } from "./fetchBio";

const Lesson2_2 = () => {
  const [person, setPerson] = useState<string>("ShinCode");
  const [bio, setBio] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false; //気にしない
    const startFetching = async () => {
      setBio(null);
      const response = await fetchBio(person);
      if (!ignore) {
        setBio(response);
      }
    };

    startFetching();

    //後始末=クリーンアップ
    return () => {
      ignore = true; //気にする
    };
  }, [person]);

  return (
    <div>
      <select
        value={person}
        onChange={(e) => {
          setPerson(e.target.value);
        }}
      >
        <option value="ShinCode">ShinCode</option>
        <option value="TestUser">TestUser</option>
        <option value="SampleUser">SampleUser</option>
      </select>

      <hr />

      <p className="text-black">{bio ?? "Loading..."}</p>
    </div>
  );
};

export default Lesson2_2;
