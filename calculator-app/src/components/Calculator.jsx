
import { useState, useEffect } from "react";

export default function Calculator() {
  const [value, setValue] = useState("");

  
  const handleClick = (val) => {
  
    let v = val;
    const last = value.slice(-1);
    if (value === "" && (/^[+*/%]$/.test(v))) return;
    if ((/[+\-*/%]/).test(last) && (/^[+*/%]$/.test(v))) return;
    if (v === ".") {
      const idx = Math.max(
        value.lastIndexOf("+"),
        value.lastIndexOf("-"),
        value.lastIndexOf("*"),
        value.lastIndexOf("/"),
        value.lastIndexOf("%")
      );
      const current = value.slice(idx + 1);
      if (current.includes(".")) return;
      if (current === "") v = "0.";
    }
    setValue((s) => s + v);
  };

  const del = () => setValue((s) => s.slice(0, -1));

  const calculate = () => {
    if (!value || value.trim() === "") return;
    try {
      if (!/^[-+*/%()0-9.\s]+$/.test(value)) {
        setValue("Error");
        return;
      }
      const sanitized = value.replace(/(\d+(?:\.\d+)?)%/g, "($1/100)");
      const cleaned = sanitized
        .replace(/\+\+/g, "+")
        .replace(/--/g, "+")
        .replace(/\+-/g, "-")
        .replace(/-\+/g, "-");
      
      const val = Function('"use strict"; return (' + cleaned + ")")();
      if (typeof val === "number" && isFinite(val)) {
        setValue(
          String(Number.parseFloat(String(val)).toPrecision(12)).replace(
            /(?:\.0+|0+)$/,
            ""
          )
        );
      } else {
        setValue("Error");
      }
    } catch {
      setValue("Error");
    }
  };

  const clear = () => setValue("");

  
  useEffect(() => {
    const onKey = (e) => {
      const k = e.key;
      if (/^[0-9]$/.test(k)) handleClick(k);
      else if (k === ".") handleClick(".");
      else if (k === "+" || k === "-" || k === "*" || k === "/" || k === "%")
        handleClick(k);
      else if (k === "Enter" || k === "=") {
        e.preventDefault();
        calculate();
      } else if (k === "Backspace") {
        del();
      } else if (k.toLowerCase() === "c") {
        clear();
      } else if (k === "(" || k === ")") {
        handleClick(k);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [value]); 

  const buttons = [
    ["C", "⌫", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "(", ")"],
    ["="],
  ];

  return (
    <div className="w-full max-w-sm mx-auto mt-10 p-6 
      bg-white/10 backdrop-blur-xl border border-white/20 
      rounded-2xl shadow-xl">

      <input
        value={value}
        readOnly
        className="w-full h-30 text-right px-4 
          text-8xl font-bold tracking-wider 
          bg-black/40 text-white rounded-xl 
          mb-6 md:text-8xl"
          style={{ minHeight: 70 }}

      />

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-4">

        {buttons.flat().map((b, i) => {
          const isEqual = b === "=";
          const isOperator = (/^[+\-*/%]$/.test(b));
          const isSpecial = b === "C" || b === "⌫";

          const handle = () => {
            if (b === "C") clear();
            else if (b === "⌫") del();
            else if (b === "=") calculate();
            else handleClick(b);
          };

          return (
            <button
              key={i}
              onClick={handle}
              className={`py-4 sm:py-6 px-3 sm:px-4 text-2xl sm:text-3xl font-bold 
                ${isEqual ? "col-span-4 bg-green-500 text-white" : isOperator ? "bg-white/20 text-white" : "bg-white/10 text-white"}
                rounded-xl transition active:scale-95`}
              style={{ minHeight: 64 }}
            >
              {b}
            </button>
          );
        })}

      </div>
    </div>
  );
}
// ...existing code...