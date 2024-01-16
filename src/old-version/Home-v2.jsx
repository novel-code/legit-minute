import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useReducer } from "react";

// const defaultData = [
//   {
//     cue: "fanasizing about scoring a goal or dribbling/tackle and to show off and adreneline",
//     craving: "run and play and pull ups",
//     response: "praying", // AH
//     reward: "playing football", // NAH
//   },
//   {
//     cue: "feeling low or just after seeing other people's success and start the daydream without completing work towards achiving that dream with a subconsious mindset that if that dumb person can do it then i could achive more",
//     craving: "",
//     response: "working out in gym",
//     reward: "listening music",
//   },
//   {
//     cue: "fear of missing out/feeling low/news/to talk about cool trending topics to others for validation to show them that you know stuff",
//     craving: "",
//     response: "creating content on LinkedIn",
//     reward: "watching youtube",
//   },
//   {
//     cue: "nothing to do/feeling sad/low/fantisize about being in a good company",
//     craving: "",
//     response: "creating content for novel code",
//     reward: "scrolling on LinkedIn",
//   },
//   {
//     cue: "if it exist/ if i am hungry and there is no tasty food, then i become like animal - i just go and buy some chips",
//     craving: "chips",
//     response: "creating personal projects",
//     reward: "eating food processed food",
//   },
//   {
//     cue: "",
//     craving: "",
//     response:
//       "gathering info through books/articles/blogs/linkedin post/youtube and implementing immediately on any A",
//     reward: "",
//   },
//   {
//     cue: "",
//     craving: "",
//     response:
//       "gathering info through books/articles/blogs/linkedin post/youtube and implementing immediately on any A",
//     reward: "",
//   },
//   {
//     cue: "",
//     craving: "",
//     response: "reading books creating software based of book summary",
//     reward: "",
//   },
//   {
//     cue: "",
//     craving: "",
//     response: "eating healty food",
//     reward: "",
//   },
//   {
//     cue: "",
//     craving: "",
//     response: "netwoking/connecting/socializing/talking to new people",
//     reward: "",
//   },
//   {
//     cue: "",
//     craving: "",
//     response: "helping people",
//     reward: "",
//   },
//   {
//     cue: "",
//     craving: "",
//     response: "working on busines",
//     reward: "",
//   },
//   {
//     cue: "",
//     craving: "",
//     response: "solving own problems",
//     reward: "",
//   },
//   {
//     cue: "",
//     craving: "",
//     response: "learning new stuff through building",
//     reward: "",
//   },
//   {
//     cue: "",
//     craving: "",
//     response: "8 hours of sleeping",
//     reward: "",
//   },
// ];
const defaultData = [
  {
    cue: "fanasizing ",
    craving: "run and play and pull ups",
    response: "praying", // AH
    reward: "playing football", // NAH
  },
  {
    cue: "feeling low ",
    craving: "test",
    response: "working out in gym",
    reward: "listening music",
  },
  {
    cue: "fear of missing out",
    craving: "test2",
    response: "creating content on LinkedIn",
    reward: "watching youtube",
  },
  {
    cue: "nothing to do",
    craving: "test3",
    response: "creating content for novel code",
    reward: "scrolling on LinkedIn",
  },
  {
    cue: "if it exist, buy some chips",
    craving: "chips",
    response: "creating personal projects",
    reward: "eating food processed food",
  },
  {
    cue: "start",
    craving: "one",
    response: "books/articles/blogs/linkedin implementing immediately on any A",
    reward: "two",
  },
  {
    cue: "three",
    craving: "four",
    response: "gathering info through books",
    reward: "five",
  },
  {
    cue: "six",
    craving: "sever",
    response: "creating software based of book summary",
    reward: "eight",
  },
  {
    cue: "nine",
    craving: "ten",
    response: "eating healty food",
    reward: "eleven",
  },
  {
    cue: "twelev",
    craving: "thirteen",
    response: "netwoking/connecting/socializing/talking ",
    reward: "fourteen",
  },
  {
    cue: "fifteen",
    craving: "sixteen",
    response: "helping people",
    reward: "seventeen",
  },
  {
    cue: "eighteen",
    craving: "nineteen",
    response: "working on busines",
    reward: "twenty",
  },
  {
    cue: "twotyone",
    craving: "ttwo",
    response: "solving own problems",
    reward: "tthree",
  },
  {
    cue: "tfour",
    craving: "tfive",
    response: "learning new stuff through building",
    reward: "tsix",
  },
  {
    cue: "tseven",
    craving: "teight",
    response: "8 hours of sleeping",
    reward: "tnine",
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("cue"),
  columnHelper.accessor("craving"),
  columnHelper.accessor("response"),
  columnHelper.accessor("reward"),
];

function Home() {
  const rerender = useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data: defaultData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log("rendering");

  return (
    <div>
      {/* <h1 className='text-3xl font-bold underline'>Hello d world!</h1> */}
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => rerender()}>re render</button>
    </div>
  );
}
export default Home;
