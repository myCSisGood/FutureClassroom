import Image from "next/image";

export default function DataCard({
  title,
  data,
  hasChart = false,
}: {
  title: string;
  data: any[];
  hasChart?: boolean;
}) {
  return (
    <div className="bg-white rounded-[24px] p-6 flex flex-col h-full overflow-hidden">
      <div className="flex justify-between items-center mb-2">
        <h3 className="headline-3-sb text-gray-90">{title}</h3>
        <div className="flex items-center gap-1 cursor-pointer group">
          <span className="body-3-reg text-gray-90">所有課程</span>
          <div className="shrink-0 w-[14px] h-[14px] bg-gray-90 rounded-full flex items-center justify-center">
            <Image
              src="/icon/common/icon_chevron-right.svg"
              alt="View More"
              width={12}
              height={12}
              className="shrink-0 invert brightness-200"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto  pr-1 min-h-0">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-3 border-b border-gray-20 last:border-0 gap-2"
          >
            <div>
              <div className="body-1-reg text-gray-90 mb-1">{item.name}</div>
              <div className="flex gap-2">
                <span className="body-3-reg text-gray-70 bg-gray-10 px-2 py-1 rounded-[4px]">
                  {item.date}
                </span>
                <span className="body-3-reg text-gray-70 bg-gray-10 px-2 py-1 rounded-[4px]">
                  {item.code}
                </span>
                <span className="body-3-reg text-gray-70 bg-gray-10 px-2 py-1 rounded-[4px]">
                  {item.type}
                </span>
                <span className="body-3-reg text-gray-70 bg-gray-10 px-2 py-1 rounded-[4px]">
                  {item.credit}
                </span>
              </div>
            </div>
            {hasChart && (
              <div className="w-20 h-10 bg-blue-50 rounded-md overflow-hidden relative shrink-0">
                <div
                  className="absolute bottom-0 w-full h-1/2 bg-blue-200 opacity-50"
                  style={{
                    clipPath:
                      "polygon(0 100%, 20% 40%, 40% 60%, 60% 20%, 80% 50%, 100% 0, 100% 100%)",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
