import React, { useEffect } from "react"
import { withStyles } from "@material-ui/core"

import { styles } from "./styles"
import { getDataBooks } from "../../../../Services/Actions"
import { SkeletonMUI, RandomImage } from "../../../../components"

function ListItem({ data, loading, classes }) {
    const { item, itemReverse } = classes

    let datanode = data ? data.map(({ title, author_name, first_publish_year }, i) => {
        const is2 = i % 2 === 0
        return (
            <div key={i} className={is2 ? item : itemReverse}>
                <RandomImage />
                <div className={classes.row}>
                    <div className={classes.linkTitle}>
                        <a href={"https://google.com/search?q=" + title} rel="noreferrer" target="_blank">
                            <span>{title}</span>
                        </a>
                    </div>
                    <div className={classes.linkAuthor}>
                        <span>Publisher | {author_name}</span>
                        <span> | {first_publish_year}</span>
                    </div>
                </div>
            </div>
        )
    }) : <span className={item}>Tidak Ada Data</span>
    return loading ? <SkeletonMUI classes={classes} count={3} /> : datanode
}

function MarketPlaceList({ classes }) {
    const [searchVal, setValue] = React.useState('')
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    const handleSearch = e => {
        e.preventDefault()
        setLoading(true)
        const { value } = e.target
        setValue(value)
    }

    useEffect(() => {
        if (searchVal)
            getDataBooks(searchVal).then(({ data: { docs } }) => {
                setData(docs.length > 0 ? docs : false)
                setLoading(false)
            })
        else { setLoading(false); setData([]) }
    }, [searchVal])

    return (
        <div className={classes.col}>
            <div className="search-box">
                <input
                    type="text"
                    value={searchVal}
                    placeholder="Search"
                    className="search-form"
                    onChange={handleSearch} />

            </div>
            <ListItem
                data={data}
                loading={loading}
                classes={classes} />
        </div>
    )
}

export default withStyles(styles)(MarketPlaceList)