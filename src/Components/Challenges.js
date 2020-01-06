import React from "react";

const challenges = [
  {
    category: "Solution for patients, caregivers, physicians.",
    company: "Express Scripts",
    challenge:
      "Express Scripts is looking for innovative healthcare solutions that are powered by technology. Design a solution that redefines and simplifies the healthcare experience for patients, caregivers and physicians enabling them to do more of what they love."
  },
  {
    category:
      "Resource for residents of multilingual/multicultural city like Miami.",
    company: "Google",
    challenge:
      "Create a resource that would benefit residents of a multilingual and multicultural city like Miami. Bonus points will be awarded for creative use of one or more of the Google Cloud APIs (Text-to-Speech, Computer Vision, Translate, etc.)."
  },
  {
    category: "Leveraging Enhanced Connectivity.",
    company: "Carnival",
    challenge:
      "Fast and resilient internet connectivity will be ubiquitous onboard our ships in the near future. What opportunities does this unlock?"
  },
  {
    category: "Best hack on 8base platform.",
    company: "8base",
    challenge: "Using 8base platform, what awesome hack can you create?"
  },
  {
    category: "Best Social Good Hack.",
    company: "WICS FIU",
    challenge:
      "Best hack that helps the world become a better plaee. 50% of the team must identify as female"
  },
  {
    category: "Best use of Snap Kit.",
    company: "MLH"
  },
  {
    category: "Best IoT Hack using a Qualcomm Device.",
    company: "MLH"
  },
  {
    category: "Best use of Aloglia API.",
    company: "MLH"
  },
  {
    category: "Best use of Google Cloud Platform.",
    company: "MLH"
  },
  {
    category: "Best Domain Registered with Domain.com.",
    company: "MLH"
  }
];

export default class Challenges extends React.Component {
  render() {
    return (
      <div className="challenges">
        <h2>
          <b>Challenges</b>
        </h2>
        <ul className="schedule-list">
          {challenges.map((item, index) => (
            <li key={index}>
              <span className="schedule-header">
                <span style={{ fontSize: "25px" }}>
                  <b>{item.category}</b>
                </span>
                <span style={{ color: "#8f40bf" }}>
                  <b>{item.company}</b>
                </span>
              </span>
              {item.challenge}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
