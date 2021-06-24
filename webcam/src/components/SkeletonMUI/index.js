import React from "react"
import { Skeleton } from "@material-ui/lab"

function SkeletonMUI({ classes, count }) {
    let res = []
    for (let i = 0; i < count; i++) {
        res.push(<div key={i} className={classes.itemSkeleton}>
            <Skeleton variant="rect" width={"29%"} height={200} />
            <div className={classes.rowSkeleton}>
                <Skeleton variant="text" width={"100%"} height={70} />
                <Skeleton variant="text" width={"100%"} height={30} />
                <Skeleton variant="text" width={"100%"} height={30} />
            </div>
        </div>)

    }
    return res
}
export default SkeletonMUI