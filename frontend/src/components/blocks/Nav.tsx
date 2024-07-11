
/* 外部から受け取る型 */
export type NavProps = {
    children?: React.ReactNode
};

const Nav = ({children, ...props}: {children?: React.ReactNode, props?: NavProps}) => {
    return (
        <>
            <div className="bg-gray-600 p-6 md:min-h-full">
                {children}
            </div>
        </>
    )
};

export default Nav;