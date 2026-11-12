const ListContainer = ({data}) => {

    return(
    <>
        <section>
            {data.map((student) => (
                <article key={student.id}>
                    <h1>{student.name}</h1>
                    <p>{student.program}</p>
                    <button>Delete</button>
                </article>
                
            ))}
        </section>
    </>
)
}
export default ListContainer;