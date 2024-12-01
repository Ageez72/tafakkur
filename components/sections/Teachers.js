
export default function Teachers({data, level}) {
    return (
        <div className="teachers-wrapper section-padding">
            <div className="container custom-container">
                <h2 className="head-blue mt-4 mb-5">تعرف إلى معلمات المستوى <span>{level}</span></h2>
                <div className="row">
                    {
                        data?.map((teacher) => (
                            <div className="col-12 col-md-6 d-flex align-items-center gap-4 mb-5" key={teacher.id}>
                                <div className="col-auto teacher-img">
                                    <img src={teacher.image} alt={teacher.name} />
                                </div>
                                <div className="col">
                                    <h4 className="mb-2">{teacher.name}</h4>
                                    <div dangerouslySetInnerHTML={{ __html: teacher.desc }}/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
