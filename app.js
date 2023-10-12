addEventListener("DOMContentLoaded", () => {
  output.innerHTML = `<i class="ti ti-arrow-narrow-right text-2xl text-red-500"></i><span id="text-placeholder"></span><span id="cursor" class="">กำลังโหลด...</span>`;
  window.pyodideReadyPromise = main();
});
var codeText = `# @ppython_basic
print("Ppython Basic")`;

window.code_background = `
def example_width_height():
    return """Enter width: 50
Enter height: 30
ผลลัพธ์ของ width 50 ซม และ height 30 ซม คือ sum 80 ซม"""
def example_input_name():
    return """Enter name: Samai
Hi, Samai"""
def example_input_number():
    return """Enter one: 20
Enter two: 30
50"""
def example_input_year():
    return """Enter year old: 34
อีก 10 ปีจะอายุ 44"""
`;

const resultCode = (code) => {
  const output = document.querySelector("#output");
  output.innerHTML = `<i class="ti ti-arrow-narrow-right text-2xl text-red-500"></i><span id="text-placeholder"></span><span id="cursor" class="text-red-500">|</span>`;
  const textPlaceholder = document.getElementById("text-placeholder");
  const cursor = document.getElementById("cursor");
  const text = ` python app.py\n`;
  let index = 0;
  let showCursor = true;
  const interval = setInterval(() => {
    textPlaceholder.textContent = text.substring(0, index);
    index++;
    if (index > text.length) {
      showCursor = !showCursor;
      cursor.style.visibility = showCursor ? "visible" : "hidden";
      textPlaceholder.textContent += code;
      clearInterval(interval);
    }
  }, 30);
};

async function main() {
  let pyodide = await loadPyodide();
  const codePython = pyodide.runPython(`
    import sys
    show = list(sys.version.split(" "))
    result = "Python เวอร์ชั่น : " + show[0]
    
    result
    `);
  resultCode(codePython);
  return pyodide;
}

const runBtn = async () => {
  let pyodide = await window.pyodideReadyPromise;
  try {
    pyodide.runPython(`
        import io
        sys.stdout = io.StringIO()
        `);
    pyodide.setStdin({ stdin: () => prompt("กรอกข้อความจากไปยัง input()") });
    pyodide.runPython(window.code_background);
    pyodide.runPython(window.editor.getValue());
    resultCode(pyodide.runPython("sys.stdout.getvalue()"));
  } catch (err) {
    resultCode(err);
  }
};

const editorMonaco = () => {
  require.config({
    paths: {
      vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs",
    },
  });
  const editor = document.querySelector("#editor");
  require(["vs/editor/editor.main"], () => {
    monaco.languages.register({ id: "python" });
    // Define the Python language keywords
    var pythonKeywords = [
      "async",
      "await",
      "break",
      "continue",
      "in",
      "is",
      "lambda",
      "yield",
    ];
    let keywords = pythonKeywords.map(function (keyword) {
      return {
        label: keyword,
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: keyword,
      };
    });
    console.log(keywords);
    monaco.languages.registerCompletionItemProvider("python", {
      provideCompletionItems: function (model, position) {
        return {
          suggestions: [
            {
              label: "print",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "print()",
            },
            {
              label: "len",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "len()",
            },
            {
              label: "range",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "range()",
            },
            {
              label: "if",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "if",
            },
            {
              label: "else",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "else",
            },
            {
              label: "elif",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "elif",
            },
            {
              label: "for",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "for",
            },
            {
              label: "while",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "while",
            },
            {
              label: "def",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "def",
            },
            {
              label: "class",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "class",
            },
            {
              label: "import",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "import",
            },
            {
              label: "from",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "from",
            },
            {
              label: "return",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "return",
            },
            {
              label: "True",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "True",
            },
            {
              label: "False",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "False",
            },
            {
              label: "None",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "None",
            },
            {
              label: "and",
              kind: monaco.languages.CompletionItemKind.Operator,
              insertText: "and",
            },
            {
              label: "or",
              kind: monaco.languages.CompletionItemKind.Operator,
              insertText: "or",
            },
            {
              label: "not",
              kind: monaco.languages.CompletionItemKind.Operator,
              insertText: "not",
            },
            {
              label: "try",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "try",
            },
            {
              label: "except",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "except",
            },
            {
              label: "finally",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "finally",
            },
            {
              label: "raise",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "raise",
            },
            {
              label: "with",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "with",
            },
            {
              label: "as",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "as",
            },
            {
              label: "del",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "del",
            },
            {
              label: "pass",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "pass",
            },
            {
              label: "global",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "global",
            },
            {
              label: "nonlocal",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "nonlocal",
            },
            {
              label: "assert",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "assert",
            },
            {
              label: "abs",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "abs()",
            },
            {
              label: "dict",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "dict()",
            },
            {
              label: "str",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "str()",
            },
            {
              label: "int",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "int()",
            },
            {
              label: "float",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "float()",
            },
            {
              label: "list",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "list()",
            },
            {
              label: "open",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "open()",
            },
            {
              label: "sorted",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "sorted()",
            },
            {
              label: "tuple",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "tuple()",
            },
            {
              label: "set",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "set()",
            },
            {
              label: "round",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "round()",
            },
            {
              label: "zip",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "zip()",
            },
            {
              label: "max",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "max()",
            },
            {
              label: "min",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "min()",
            },
            {
              label: "sum",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "sum()",
            },
            {
              label: "pow",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "pow()",
            },
            {
              label: "round",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "round()",
            },
            {
              label: "enumerate",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "enumerate()",
            },
            {
              label: "filter",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "filter()",
            },
            {
              label: "map",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "map()",
            },
            {
              label: "reduce",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "reduce()",
            },
            {
              label: "isinstance",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "isinstance()",
            },
            {
              label: "type",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "type()",
            },
            {
              label: "help",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "help()",
            },
            {
              label: "exit",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "exit()",
            },
            {
              label: "append",
              kind: monaco.languages.CompletionItemKind.Method,
              insertText: "append()",
            },
            {
              label: "clear",
              kind: monaco.languages.CompletionItemKind.Method,
              insertText: "clear()",
            },
            {
              label: "copy",
              kind: monaco.languages.CompletionItemKind.Method,
              insertText: "copy()",
            },
            {
              label: "count",
              kind: monaco.languages.CompletionItemKind.Method,
              insertText: "count()",
            },
            {
              label: "extend",
              kind: monaco.languages.CompletionItemKind.Method,
              insertText: "extend()",
            },
            {
              label: "index",
              kind: monaco.languages.CompletionItemKind.Method,
              insertText: "index()",
            },
            {
              label: "insert",
              kind: monaco.languages.CompletionItemKind.Method,
              insertText: "insert()",
            },
            {
              label: "pop",
              kind: monaco.languages.CompletionItemKind.Method,
              insertText: "pop()",
            },
            {
              label: "remove",
              kind: monaco.languages.CompletionItemKind.Method,
              insertText: "remove()",
            },
            {
              label: "reverse",
              kind: monaco.languages.CompletionItemKind.Method,
              insertText: "reverse()",
            },
            {
              label: "sort",
              kind: monaco.languages.CompletionItemKind.Method,
              insertText: "sort()",
            },
            // Add more suggestions here...
          ].concat(keywords),
        };
      },
    });
    window.editor = monaco.editor.create(document.getElementById(editor.id), {
      value: `${codeText}`,
      language: "python",
      theme: "vs-dark",
      fontSize: 20,
      formatOnPaste: true,
      suggestions: {
        showMethods: true,
      },
      minimap: {
        enabled: false,
      },
      scrollbar: {
        horizontal: false,
        vertical: false,
      },
      mouseWheelZoom: true,
    });
  });
};

const {
  div,
  button,
  style,
  footer,
  nav,
  aside,
  i,
  a,
  p,
  li,
  ul,
  label,
  details,
  summary,
  select,
  option,
} = van.tags;

const Footer = () => {
  return footer(
    {
      class:
        "footer items-center p-4 bg-neutral text-neutral-content flex justify-between",
    },
    aside(
      {
        class: "items-center grid-flow-col",
      },
      i({
        class: "ti ti-code-dots text-5xl",
      }),
      p(
        "Created by",
        a(
          {
            href: "https://github.com/PPythonBasic",
            target: "_blank",
            rel: "noopener noreferrer",
          },
          " Ppython Basic"
        )
      )
    ),
    nav(
      {
        class: "grid-flow-col gap-4 md:place-self-center md:justify-self-end",
      },
      a(
        {
          href: "https://github.com/PPythonBasic",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        i({ class: "ti ti-brand-github text-3xl" })
      )
    )
  );
};

const Select = () => {
  return select(
    {
      class: "select mx-6 my-2 bg-base-200",
      onchange: (event) => {
        const selectElement = event.target;
        const selectedOption = selectElement.value;
        window.editor.setValue(selectedOption);
        runBtn();
      },
    },
    option(
      {
        disabled: true,
        selected: true,
      },
      "เลือกดูตัวอย่างโค้ด Python"
    ),
    ExampleCode.map((item, index) =>
      option({
        value: item.example,
        label: item.label,
        id: index,
        disabled: item.label.includes("-----") ? true : false,
      })
    )
  );
};
const App = () => {
  return div(
    {
      class: "flex flex-col m-2",
    },
    button(
      {
        id: "run",
        class: "mx-6 my-2 btn btn-success",
        onclick: () => {
          runBtn();
        },
      },
      i({
        class: "ti ti-run text-3xl",
      })
    ),
    Select(),
    div(
      {
        id: "workspace",
        class:
          "grid grid-cols-1 lg:grid-cols-2 m-2 items-center justify-center",
      },
      div({
        id: "editor",
        class: "h-96 mx-4 lg:h-screen ",
      }),
      div({
        id: "output",
        class:
          "h-96 m-4 lg:h-screen mx-4 font-mono bg-base-200 px-4 rounded-2xl overflow-auto",
        style: "white-space: pre-line;",
      })
    )
  );
};
van.add(document.body, App());
van.add(
  document.body,
  style(
    ".overflow-guard,.monaco-editor.no-user-select.showUnused.showDeprecated.vs-dark{border-radius:15px !important;}"
  ),
  Footer()
);
editorMonaco();
