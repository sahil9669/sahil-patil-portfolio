import { Terminal } from "lucide-react";

function CodeEditor() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[20px]
        border border-white/[0.08]
        bg-gradient-to-b from-[#15171f] to-[#101218]
        shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]
        animate-[float_6s_ease-in-out_infinite]
      "
    >
      {/* Title Bar */}
      <div
        className="
          flex items-center gap-2
          border-b border-white/[0.08]
          bg-white/[0.02]
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
          border-b border-white/[0.08]
          bg-white/[0.02]
          px-2
        "
      >
        <div
          className="
            flex items-center gap-2
            border-r border-white/[0.05]
            border-t-2 border-t-[#7c5cfc]
            bg-[#12141b]
            px-4 py-2.5
            font-mono text-xs
            text-[#f2f3f6]
          "
        >
          <Terminal size={11} />
          App.jsx
        </div>

        <div
          className="
            border-r border-white/[0.05]
            px-4 py-2.5
            font-mono text-xs
            text-[#5c6270]
          "
        >
          server.js
        </div>
      </div>

      {/* Code */}
      <div
        className="
          px-[22px] py-5
          font-mono text-[12.8px]
          leading-[1.9]
        "
      >
        <CodeLine number="1">
          <span className="text-[#5c6270]">
            // building something great
          </span>
        </CodeLine>

        <CodeLine number="2">
          <span className="text-[#c792ea]">const</span>{" "}
          <span className="text-[#82aaff]">Developer</span>{" "}
          <span className="text-[#89ddff]">= () =&gt; {"{"}</span>
        </CodeLine>

        <CodeLine number="3">
          &nbsp;&nbsp;
          <span className="text-[#c792ea]">const</span>{" "}
          [stack]{" "}
          <span className="text-[#89ddff]">=</span>{" "}
          useState
          <span className="text-[#89ddff]">(</span>
          <span className="text-[#c3e88d]">'MERN'</span>
          <span className="text-[#89ddff]">);</span>
        </CodeLine>

        <CodeLine number="4" />

        <CodeLine number="5">
          &nbsp;&nbsp;
          <span className="text-[#c792ea]">return</span>{" "}
          <span className="text-[#89ddff]">(</span>
        </CodeLine>

        <CodeLine number="6">
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-[#89ddff]">&lt;</span>
          <span className="text-[#f07178]">Portfolio</span>
        </CodeLine>

        <CodeLine number="7">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-[#ffcb6b]">name</span>
          <span className="text-[#89ddff]">=</span>
          <span className="text-[#c3e88d]">"Sahil Patil"</span>
        </CodeLine>

        <CodeLine number="8">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-[#ffcb6b]">role</span>
          <span className="text-[#89ddff]">=</span>
          <span className="text-[#c3e88d]">
            "MERN Stack Developer"
          </span>
        </CodeLine>

        <CodeLine number="9">
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-[#89ddff]">/&gt;</span>
        </CodeLine>

        <CodeLine number="10">
          &nbsp;&nbsp;
          <span className="text-[#89ddff]">);</span>
        </CodeLine>

        <CodeLine number="11">
          <span className="text-[#89ddff]">{"}"}</span>
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
          border-t border-white/[0.08]
          bg-[#0c0d12]
          px-[22px] py-3.5
          font-mono text-xs
          text-[#9aa0ac]
        "
      >
        <div>
          <span className="text-[#22d3ee]">➜</span>{" "}
          npm run dev
        </div>

        <div className="mt-1 text-[#5c6270]">
          ✓ compiled successfully{" "}
          <span className="text-[#8adf8a]">
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
      <span className="inline-block w-5 select-none text-[#5c6270]">
        {number}
      </span>
      {children}
    </div>
  );
}

export default CodeEditor;