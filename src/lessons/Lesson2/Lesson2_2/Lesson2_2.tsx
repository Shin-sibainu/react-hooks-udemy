import { useEffect, useState } from "react";
import { fetchBio } from "./fetchBio";

const Lesson2_2 = () => {
  const [person, setPerson] = useState<string>("ShinCode");
  const [bio, setBio] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;
    const startFetching = async () => {
      setBio(null);
      const response = await fetchBio(person);
      if (!ignore) {
        setBio(response);
      }
    };

    startFetching();

    return () => {
      ignore = true;
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
