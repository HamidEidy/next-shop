'use client'
const OpenModalButton = () => {
    const openModal = () => {
        if (document.querySelector('.modal')?.classList.contains('h-0')) {
            document.querySelector('.modal')?.classList.remove('h-0')
        } else {
            document.querySelector('.modal')?.classList.add('h-0')
        }


    }
    return (
        <button onClick={openModal} className=" tst text-gray-700  border-b">افزودن آدرس جدید</button>
    )
}
export default OpenModalButton;