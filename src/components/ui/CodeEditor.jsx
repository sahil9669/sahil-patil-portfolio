import { Terminal } from "lucide-react";

function CodeEditor() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[20px]
        border border-[#e1e4e8]
        bg-white
        shadow-[0_20px_50px_-20px_rgba(0,0,0,0.18)]
        animate-[float_6s_ease-in-out_infinite]
      "
    >
      {/* Title Bar */}
      <div
        className="
          flex items-center gap-2
          border-b border-[#e5e7eb]
          bg-[#f8f9fa]
          px-4 py-[13px]
        "
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>

      {/* Tabs */}
      <div
        className="
          flex
          border-b border-[#e5e7eb]
          bg-[#f8f9fa]
          px-2
        "
      >
        {/* Active Tab */}
        <div
          className="
            flex items-center gap-2
            border-r border-[#e5e7eb]
            border-t-2 border-t-[#7c5cfc]
            bg-white
            px-4 py-2.5
            font-mono text-xs
            text-[#17191f]
          "
        >
          <Terminal size={11} />
          App.jsx
        </div>

        {/* Inactive Tab */}
        <div
          className="
            border-r border-[#e5e7eb]
            px-4 py-2.5
            font-mono text-xs
            text-[#6b7280]
          "
        >
          server.js
        </div>
      </div>

      {/* Code */}
      <div
        className="
          bg-white
          px-[22px] py-5
          font-mono text-[12.8px]
          leading-[1.9]
        "
      >
        <CodeLine number="1">
          <span className="text-[#8b929c]">
            // building something great
          </span>
        </CodeLine>

        <CodeLine number="2">
          <span className="text-[#8b5cf6]">const</span>{" "}
          <span className="text-[#2563eb]">Developer</span>{" "}
          <span className="text-[#0891b2]">= () =&gt; {"{"}</span>
        </CodeLine>

        <CodeLine number="3">
          &nbsp;&nbsp;
          <span className="text-[#8b5cf6]">const</span>{" "}
          [stack]{" "}
          <span className="text-[#0891b2]">=</span>{" "}
          useState
          <span className="text-[#0891b2]">(</span>
          <span className="text-[#16a34a]">'MERN'</span>
          <span className="text-[#0891b2]">);</span>
        </CodeLine>

        <CodeLine number="4" />

        <CodeLine number="5">
          &nbsp;&nbsp;
          <span className="text-[#8b5cf6]">return</span>{" "}
          <span className="text-[#0891b2]">(</span>
        </CodeLine>

        <CodeLine number="6">
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-[#0891b2]">&lt;</span>
          <span className="text-[#dc2626]">Portfolio</span>
        </CodeLine>

        <CodeLine number="7">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-[#d97706]">name</span>
          <span className="text-[#0891b2]">=</span>
          <span className="text-[#16a34a]">
            "Sahil Patil"
          </span>
        </CodeLine>

        <CodeLine number="8">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-[#d97706]">role</span>
          <span className="text-[#0891b2]">=</span>
          <span className="text-[#16a34a]">
            "MERN Stack Developer"
          </span>
        </CodeLine>

        <CodeLine number="9">
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-[#0891b2]">/&gt;</span>
        </CodeLine>

        <CodeLine number="10">
          &nbsp;&nbsp;
          <span className="text-[#0891b2]">);</span>
        </CodeLine>

        <CodeLine number="11">
          <span className="text-[#0891b2]">{"}"}</span>

          {/* Blinking Cursor */}
          <span
            className="
              ml-1 inline-block
              h-3.5 w-[7px]
              bg-[#7c5cfc]
              align-middle
              animate-[blink_1s_step-end_infinite]
            "
          />
        </CodeLine>
      </div>

      {/* Terminal */}
      <div
        className="
          border-t border-[#e5e7eb]
          bg-[#f8f9fa]
          px-[22px] py-3.5
          font-mono text-xs
          text-[#5f636d]
        "
      >
        <div>
          <span className="text-[#0891b2]">➜</span>{" "}
          npm run dev
        </div>

        <div className="mt-1 text-[#8b929c]">
          ✓ compiled successfully{" "}
          <span className="text-[#16a34a]">
            — ready in 312ms
          </span>
        </div>
      </div>
    </div>
  );
}

function CodeLine({ number, children }) {
  return (
    <div>
      <span className="inline-block w-5 select-none text-[#9ca3af]">
        {number}
      </span>
      {children}
    </div>
  );
}

export default CodeEditor;

