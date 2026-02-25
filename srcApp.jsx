import { useState, useEffect } from "react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, Legend } from "recharts";

const T = {
  navy: "#0C1B2A", navyMid: "#152B42", teal: "#0D7377", tealLight: "#14A3A8",
  amber: "#D4841F", amberLight: "#F0A83C", cream: "#FBF7F0", offWhite: "#F3EDE3",
  green: "#2D8F5C", red: "#C0392B", blue: "#1B6B93", brown: "#8B5E34",
  bg: "#0e1521", card: "#151f2e", cardHover: "#1a2638", border: "#1e3048",
  text: "#e2e8f0", textMuted: "#8896a6", textDim: "#5a6b7d",
  success: "#22c55e", warning: "#f59e0b", danger: "#ef4444",
};

// ... (Paste all the data arrays: interventions, pmcTeam, etc. here)

const Badge = ({ color, children }) => (
  <span style={{ background: color + "22", color, padding: "2px 8px", borderRadius: 4, fontSize: 11, fontWeight: 600 }}>{children}</span>
);

const StatusDot = ({ status }) => {
  const c = status === "Green" ? T.success : status === "Amber" ? T.warning : T.danger;
  return <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: c, marginRight: 6 }} />;
};

// ... (Rest of your component code here)

export default function App() {
  // ... (Your App function code)
}