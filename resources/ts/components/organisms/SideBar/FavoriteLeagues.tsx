import { useGetFavoriteApi } from "../../../hooks/useGetFavoriteApi";

export const FavoriteLeagues = () => {
    const { favorites, loading } = useGetFavoriteApi("leagues");
    console.log(favorites);

    return (
        <div>
            <h1 className="text-[#EEEEEE]">お気に入りチーム</h1>
            {favorites.map((favorite, index) => (
                <div key={index} className="flex items-center space-x-1">
                    <img
                        src={favorite.team.logo}
                        alt={favorite.team.code}
                        className="h-4 w-4"
                    />
                    <p>{favorite.team.name}</p>
                </div>
            ))}
        </div>
    );
};
