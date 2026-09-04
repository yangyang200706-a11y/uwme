"use client";

import {
  ClassProfileDirectory,
  type ProfilesData,
} from "../class-profile/page";
import profilesData from "../data/profiles-31.json";

export default function MechEng31Page() {
  return (
    <ClassProfileDirectory data={profilesData as unknown as ProfilesData} />
  );
}
