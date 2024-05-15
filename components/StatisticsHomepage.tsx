import { motion } from "framer-motion";

const StatisticsHomepage = () => {
  return (
    <div className="mt-[800px] ">
      <div className="items-center flex justify-center">
        <span className="text-center py-4 px-6 rounded-lg mb-10 text-base lg:text-3xl font-semibold bg-gradient-to-tr from-black via-black/70 to-black text-white">
          TOTAL YEARLY UNITS SOLD
        </span>
      </div>
      <div className="grid grid-cols-12 justify-center gap-7 lg:gap-14 text-base lg:text-xl text-center px-4 lg:px-[300px]">
        <div className="col-span-4 flex flex-col items-center gap-2 font-semibold">
          <span className="grow leading-[20px]">
            Sold units
            <br />
            in 2019
          </span>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />
          <motion.h1 className="flex justify-center items-center bg-white/80 rounded-2xl drop-shadow-md text-3xl lg:text-6xl h-[70px] w-[70px] lg:h-[130px] lg:w-[130px]">
            {/* {animatedTaskAdded} */}
            120
          </motion.h1>
          <motion.div />
        </div>
        <div className="col-span-4 flex flex-col items-center gap-2 font-semibold">
          <span className="grow leading-[20px]">
            Sold units
            <br />
            in 2021
          </span>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />
          <motion.h1 className="flex justify-center items-center bg-white/80 rounded-2xl drop-shadow-md text-3xl lg:text-6xl h-[70px] w-[70px] lg:h-[130px] lg:w-[130px]">
            {/* {animatedTaskDeleted} */}
            203
          </motion.h1>
          <motion.div />
        </div>
        <div className="col-span-4 flex flex-col items-center gap-2 font-semibold">
          <span className="grow leading-[20px]">
            Sold units
            <br />
            in 2022
          </span>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />
          <motion.h1 className="flex justify-center items-center bg-white/80 rounded-2xl drop-shadow-md text-3xl lg:text-6xl h-[70px] w-[70px] lg:h-[130px] lg:w-[130px]">
            {/* {animatedTotalUsers} */}
            240
          </motion.h1>
          <motion.div />
        </div>
      </div>
    </div>
  );
};

export default StatisticsHomepage;
