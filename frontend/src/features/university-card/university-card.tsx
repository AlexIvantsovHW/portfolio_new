import * as i from "./imports";

type Props = {
  university: i.Universities;
  idx: number;
};

export const UniversityCard = (props: Props) => {
  const { university, idx } = props;

  return (
    <div
      key={university.id || idx}
      className="border border-white bg-gray-500 w-full h-[600px] flex flex-col md:flex-row items-stretch"
    >
      <img
        src={university.companyLogo}
        alt={university.companyTitle}
        className="
          w-[150px] h-[150px] 
          sm:w-[300px] sm:h-[300px] 
          md:w-[400px] md:h-[400px] 
          lg:w-[500px] lg:h-[500px] 
          xl:w-[600px] xl:h-[600px] 
          object-contain
        "
      />
      <div className="w-full flex-grow flex flex-col justify-center p-6 bg-white text-black">
        <h1 className="text-2xl font-semibold">{university.companyTitle}</h1>
        <p className="text-lg">{university.jobTitle}</p>
        <p className="text-sm text-gray-600">
          {i.dataConvector(university.startAt)} –{" "}
          {i.dataConvector(university.endAt)}
        </p>
      </div>
    </div>
  );
};
