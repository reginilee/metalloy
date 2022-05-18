import React from "react";
import LargeBanner from "./LargeBanner";
import ImageTextPreview from "./ImageTextPreview";
import TrainingCoursePreview from "./TrainingCoursePreview";
import TrainerProfilePreview from "./TrainerProfilePreview";
import ContactUs from "./ContactUs";

export default function Homepage() {
  return (
    <>
      <LargeBanner />
      <ImageTextPreview />
      <TrainingCoursePreview />
      <TrainerProfilePreview />
      <ContactUs />
    </>
  );
}
