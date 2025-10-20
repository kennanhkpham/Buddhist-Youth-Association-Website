import React from "react";
import "./Activities.css";
import vietNgu from "../pictures/2024/2024 (4).jpg";
import phatPhap from "../pictures/2023/2023 (4).jpg"
import survival from "../pictures/2024/2024 (30).jpg"
import camp from "../pictures/2024/2024 (22).jpg"
import sports from "../pictures/2023/2023 (8).jpg"
import lionDance from "../pictures/2025/2025 (4).jpg"

export default function Activities() {
  return (
    <div style={{ margin: 0, fontFamily: "Montserrat", backgroundColor: "white", textAlign: "center" }}>

      <p>
        At Từ Đàm, we offer more than just learning Buddhism and Vietnamese. 
        Our activities are designed not only for fun but also to help children 
        integrate learning into their experiences. We provide various engaging 
        activities that encourage our members to actively participate in our 
        temple community.
      </p>

      <div className="container">
        <ul>
          <a href="#liondance">Lion Dancing</a> | 
          <a href="#vietngu">Vietnamese Class</a> | 
          <a href="#phatphap">Buddhist Class</a> | 
          <a href="#survival">Survival Class</a> | 
          <a href="#dances">Modern/Traditional Dances</a> | 
          <a href="#sports">Sports Activities</a> | 
          <a href="#camp">Camping</a> 
        </ul>
      </div>

      {/* Sections */}
      <Section
        id="liondance"
        title="Lion Dancing"
        img={lionDance}
        text={`Lion dancing is at the heart of our temple’s activities, embodying both tradition and strength. 
        More than just a performance, it helps members build endurance, discipline, and teamwork.`}
        buttonLink="lion_dance.html"
      />

      <Section
        id="vietngu"
        title="Vietnamese Class"
        img={vietNgu}
        text={`Learning Vietnamese preserves heritage, strengthens family bonds, and connects generations.
        It’s about honoring traditions and embracing bilingualism for future generations.`}
      />

      <Section
        id="phatphap"
        title="Buddhist Class"
        img={phatPhap}
        text={`Through Dharma, we gain peace, wisdom, and self-understanding.
        Our Buddhist classes teach mindfulness and the foundations of compassion and clarity.`}
      />

      <Section
        id="survival"
        title="Survival"
        img = {survival}
        text={`Our Survival Skills Class teaches knot tying, semaphore, and Morse code —
        encouraging teamwork, confidence, and leadership.`}
      />

      <Section
        id="sports"
        title="Sports Activity"
        img = {sports}
        text={`Our sports programs encourage activity, teamwork, and friendship 
        through football, pickleball, volleyball, and more.`}
      />

      <Section
        id="camp"
        title="Camping"
        img = {camp}
        text={`Camping fosters unity, mindfulness, and a connection with nature —
        building lasting friendships and appreciation for simplicity.`}
      />
    </div>
  );
}

function Section({ id, title, img, text, buttonLink }) {
  return (
    <div id={id}>
      <h3>
        {title}
        <br />__________________________________
      </h3>
      {img && <img src={img} alt={title} />}
      <p>{text}</p>
      {buttonLink && (
        <div className="button-container">
          <button onClick={() => (window.location.href = buttonLink)}>
            Learn More
          </button>
        </div>
      )}
    </div>
  );
}
