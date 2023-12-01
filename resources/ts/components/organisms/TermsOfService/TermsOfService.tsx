import { useState } from "react";
import { Modal } from "@mui/material";

export const TermsOfService = () => {
    // モーダルの開閉ステート
    const [isModalOpen, setIsModalOpen] = useState(false);

    // モーダルを開く
    const openModal = () => {
        setIsModalOpen(true);
    };

    // モーダルを閉じる
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // 前のページへ戻る
    const handleClick = () => {
        window.history.back();
    };

    return (
        <div className="text-white text-opacity-80 rounded-xl bg-[#1C2632] sm:mx-0 mx-1">
            <div className="px-6 py-6">
                <h1 className="text-[28px] font-semibold mb-3">利用規約</h1>
                <p className="font-semibold text-[21px] mb-3">
                    1. サービスの利用条件
                </p>
                <p>
                    1.1
                    このウェブサイトおよびサービス（以下、「本サービス」）の利用には、これらの利用規約への同意が必要です。
                    <br />
                    本サービスを利用することで、ユーザーはこれらの利用規約に拘束されるものとします。
                </p>
                <p className="font-semibold text-[21px] my-3">
                    2. アカウントの登録と管理
                </p>
                <p className="mb-3">
                    2.1
                    本サービスを利用するためには、ユーザーはアカウントを作成する必要があります。
                    <br />
                    アカウント作成には、ユーザー名、メールアドレス、およびパスワードの提供が必要です。
                </p>
                <p>
                    2.2
                    ユーザーは、アカウント情報を正確かつ最新のものに保つ責任があります。
                    <br />
                    アカウント情報の不正確または古い情報が原因で生じた損害について、本サービスは一切の責任を負いません。
                </p>
                <p className="font-semibold text-[21px] my-3">
                    3. プライバシーとセキュリティ
                </p>
                <p>
                    3.1ユーザーは、自身のアカウントおよびパスワードの安全性を維持する責任があります。
                    <br />
                    アカウントが不正にアクセスされた場合、直ちに本サービスに通知することが求められます。
                </p>
                <p className="font-semibold text-[21px] my-3">
                    4. サービスの変更と終了
                </p>
                <p>
                    4.1
                    本サービスは、事前の通知なしに変更または終了される可能性があります。
                    <br />
                    変更または終了により発生した損害に対して、本サービスは一切の責任を負いません。
                </p>
                <p className="font-semibold text-[21px] my-3">
                    5. アカウントの削除
                </p>
                <p>
                    5.1 ユーザーは、アカウントを削除する権利を有します。
                    <br />
                    アカウントの削除手続きについては、[
                    <button
                        className="text-[#939CFF] hover:text-[#6b76f4]"
                        onClick={openModal}
                    >
                        アカウント削除手順
                    </button>
                    ]を参照してください。
                </p>
                <p className="font-semibold text-[21px] my-3">
                    6. 著作権と知的財産
                </p>
                <p>
                    6.1
                    本サービスに掲載されているコンテンツ（テキスト、画像など）は、
                    <br />
                    本サービスまたは関連する権利者の所有物であり、無断転載や使用は禁止されています。
                </p>
                <p className="font-semibold text-[21px] my-3">7. 免責事項</p>
                <p>
                    7.1
                    本サービスは、明示的または黙示的ないかなる種類の保証も行いません。
                    <br />
                    本サービスの利用に関連して生じた損害に対して、本サービスは一切の責任を負いません。
                </p>
                <p className="font-semibold text-[21px] my-3">8. 法的制約</p>
                <p>
                    8.1
                    本サービスの利用者は、適用される法律および規制に遵守する責任があります。
                    <br />
                    不適切な行為が確認された場合、本サービスは利用者に対して適切な措置を講じる権利を有します。
                </p>
                <p className="font-semibold text-[21px] my-3">
                    9. 利用規約の変更
                </p>
                <p>
                    9.1
                    これらの利用規約は事前の通知なく変更されることがあります。
                </p>
                <button
                    className="text-[#939CFF] hover:text-[#6b76f4] mt-5 text-[18px]"
                    onClick={handleClick}
                >
                    戻る
                </button>
            </div>
            {/* アカウント削除手順のモーダル */}
            <Modal
                open={isModalOpen}
                onClose={closeModal}
                className="flex items-center justify-center"
            >
                <div className="p-6 text-white text-opacity-80 bg-[#1C2632] rounded-xl sm:w-[32rem] w-[20rem]">
                    <h1 className="text-[23px] font-semibold mb-3">
                        アカウント削除手順
                    </h1>
                    <p className="py-1">1. Football Leagueへログインします。</p>
                    <p className="py-1">
                        2. ヘッダー（画面上部）のサイドメニューを開きます。
                    </p>
                    <p className="py-1">
                        3. アカウントからアカウント削除へ進みます。
                    </p>
                    <p className="py-1">
                        4. 注意事項をよく読んでアカウントを削除してください。
                    </p>
                    <button
                        className="text-[#939CFF] hover:text-[#6b76f4] mt-4"
                        onClick={closeModal}
                    >
                        閉じる
                    </button>
                </div>
            </Modal>
        </div>
    );
};
