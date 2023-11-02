import { Loading } from "./Loading/Loading";

export const TeamInformations = ({ informations, loading }) => {
    return (
        <div className="bg-gradient-to-r from-[#1d2233] rounded-t">
            {loading ? (
                <Loading />
            ) : (
                informations.map((item, index) => (
                    <div key={index} className="flex justify-center">
                        <div className="flex items-center lg:justify-center space-x-6 my-5">
                            <div className="border rounded-xl bg-black">
                                <img
                                    src={item.json_information.team.logo}
                                    alt="team"
                                    className="lg:h-24 lg:w-24 h-[5rem]"
                                />
                            </div>
                            <div className="text-[#EEEEEE] flex items-center space-x-11">
                                <div>
                                    <h2 className="font-bold lg:text-[30px] uppercase text-white">
                                        {item.json_information.team.name}
                                    </h2>
                                    <div className="flex items-center lg:space-x-16 pt-3">
                                        <div>
                                            <p>創立年:</p>
                                            <p className="font-bold">
                                                {
                                                    item.json_information.team
                                                        .founded
                                                }
                                                年
                                            </p>
                                            <p>略称:</p>
                                            <p className="font-bold">
                                                {
                                                    item.json_information.team
                                                        .code
                                                }
                                            </p>
                                            <p>国:</p>
                                            <p className="font-bold sm:w-[10rem] w-[8rem] truncate">
                                                {
                                                    item.json_information.team
                                                        .country
                                                }{" "}
                                                /{" "}
                                                {
                                                    item.json_information.venue
                                                        .city
                                                }
                                            </p>
                                        </div>
                                        <div>
                                            <p>スタジアム:</p>
                                            <p className="font-bold">
                                                {
                                                    item.json_information.venue
                                                        .name
                                                }
                                            </p>
                                            <p>グラウンド表面:</p>
                                            <p className="font-bold">
                                                {
                                                    item.json_information.venue
                                                        .surface
                                                }
                                            </p>
                                            <p>収容人数:</p>
                                            <p className="font-bold">
                                                {
                                                    item.json_information.venue
                                                        .capacity
                                                }
                                                人
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <img
                                    src={item.json_information.venue.image}
                                    alt="team"
                                    className="h-32 w-56 lg:visible invisible"
                                /> */}
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};
