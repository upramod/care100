import { useMemo, useState } from "react";

type Coverage = {
  id: number;
  day: string;
  responsibility: string;
  caregiver: string;
};

const starterCoverage: Coverage[] = [
  { id: 1, day: "Day 1", responsibility: "Ride home from hospital", caregiver: "Maya" },
  { id: 2, day: "Days 1–3", responsibility: "Medication pickup", caregiver: "" },
  { id: 3, day: "Days 1–7", responsibility: "Overnight support", caregiver: "Jordan" },
  { id: 4, day: "Week 2", responsibility: "Clinic transportation", caregiver: "" },
];

export default function App() {
  const [coverage, setCoverage] = useState(starterCoverage);
  const gaps = useMemo(() => coverage.filter((item) => !item.caregiver.trim()), [coverage]);

  function assign(id: number, caregiver: string) {
    setCoverage((current) =>
      current.map((item) => (item.id === id ? { ...item, caregiver } : item)),
    );
  }

  return (
    <main>
      <header>
        <span className="eyebrow">Caregiver coverage planning</span>
        <h1>Build a plan the transplant team can review.</h1>
        <p>Map each recovery need, name who can help, and expose every remaining gap.</p>
      </header>

      <section className="status" aria-live="polite">
        <strong>{gaps.length === 0 ? "Coverage mapped" : `${gaps.length} gaps remain`}</strong>
        <span>{coverage.length - gaps.length} of {coverage.length} needs assigned</span>
      </section>

      <section className="grid" aria-label="Care requirements">
        {coverage.map((item) => (
          <article className={item.caregiver ? "card covered" : "card gap"} key={item.id}>
            <div>
              <span className="day">{item.day}</span>
              <h2>{item.responsibility}</h2>
            </div>
            <label>
              Caregiver
              <input
                value={item.caregiver}
                placeholder="Unassigned"
                onChange={(event) => assign(item.id, event.target.value)}
              />
            </label>
          </article>
        ))}
      </section>

      <footer>
        Planning aid only. The transplant team reviews and approves the final plan.
      </footer>
    </main>
  );
}
