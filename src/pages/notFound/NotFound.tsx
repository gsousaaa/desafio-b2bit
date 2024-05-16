
const NotFound = () => {
    return (
        <section className="flex flex-col justify-center items-center w-full h-screen">
            <h2 className="text-3xl pb-5">Página não encontrada, voltar para página de login</h2>
            <a className="text-3xl bg-blue-950 rounded-3xl py-5 px-6 text-white" href="/">Voltar</a>
            <img  width="800px"src="/images/error.jpg"/>
        </section>
    )
}

export default NotFound

