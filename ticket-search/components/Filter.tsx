import Image from 'next/image'
import { FunctionComponent } from 'react'

export const Filter: FunctionComponent = () => {
    return (
        <aside className="filter wrap wrap--rounded">
            <div className="filter__title">Фильтр поиска</div>
            <div className="filter__item">
                <label htmlFor="title">Название</label>
                <input type="text" id="title" name="title" placeholder="Введите название"/>
            </div>
            <div className="filter__item">
                <label htmlFor="genre">Жанр</label>
                <input type="text" id="genre" name="genre" placeholder="Выберите жанр"/>
                <Image
                    src="/arrow.svg"
                    className=""
                    alt="Arrow image"
                    width={20}
                    height={20}
                    priority
                />
            </div>
            <div className="filter__item">
                <label htmlFor="cinema">Кинотеатр</label>
                <input type="text" id="cinema" name="cinema" placeholder="Выберите кинотеатр"/>
                <Image
                    src="/arrow.svg"
                    className=""
                    alt="Arrow image"
                    width={20}
                    height={20}
                    priority
                />
            </div>
        </aside>
    )
}