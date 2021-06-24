export const styles = (fDirec) => ({
  root: {
    flexGrow: 1,
    width: "90%",
    margin: "0 auto"
  },
  footer: {
    margin: "auto",
    marginTop: "32px",
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    width: "100%",
    justifyContent: "center",
    alignItem: "center",
    height: "auto"
  },
  item: {
    flexDirection: 'row',
    width: "70%",
    margin: '20px auto',
    height: "auto",
    overflow: "hidden",
    display: "flex",
    padding: "30px",
    backgroundColor: "#182341",
    borderRadius: "1pc",
  },
  itemReverse: {
    flexDirection: 'row-reverse',
    width: "70%",
    margin: '10px auto',
    height: "auto",
    overflow: "hidden",
    display: "flex",
    padding: "30px",
    backgroundColor: "#182341",
    borderRadius: "1pc"
  },
  linkTitle: {
    "& a": {
      "& span": {
        fontSize: "35px"
      }
    }
  },
  row: {
    flexDirection: "row",
    width: "auto",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 10px"
  },
  linkAuthor: {
    "& span": {
      color: "#768098"
    }
  },
  itemSkeleton: {
    flexDirection: 'row',
    width: "70%",
    margin: '20px auto',
    height: "auto",
    overflow: "hidden",
    display: "flex",
    padding: "30px",
    backgroundColor: "#182341",
    borderRadius: "1pc",
  },
  rowSkeleton: {
    flexDirection: "column",
    width: "60%",
    height: "auto",
    marginLeft: "auto"
  }
});
