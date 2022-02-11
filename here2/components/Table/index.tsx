import { useState, useMemo, useEffect, SetStateAction } from 'react'
import { Table, Pagination } from 'rsuite';
import styles from './styles.module.css'

type TableProps = {
  data: any
}

const Login = ({ data: rawData }: TableProps) => {
  const columnsFromData = useMemo(() => Object.keys(rawData[0]), [rawData])
  const [columns, setColumns] = useState(columnsFromData);
  const [tableHeight, setTableHeight] = useState(0);

  const [loading, setLoading] = useState(!rawData);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // if (typeof window !== "undefined") {
    //   setTableHeight(window.innerHeight / 2);
    // }
  }, [])

  // Подготавливаем данные таблицы для пагинации
  const data = useMemo(() => rawData.filter((_: any, index: number) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return index >= start && index < end;
  }), [rawData, limit, page]);

   // Меняем кол-во элеменетов для показа на странице
  const handleChangeLimit = (dataKey: SetStateAction<number>) => {
    setPage(1);
    setLimit(dataKey);
  };

  return (
    <>
      <Table
        autoHeight
        data={data}
        loading={loading}
        onRowClick={data => {
          console.log(data);
        }}
        className={styles.root}
      >
        {
          columns && columns.map((column, index) => {
            return (
              <Table.Column
                key={index}
                width={column === 'id' ? 70 : 200}
                align="center"
                resizable
                sortable
              >
                <Table.HeaderCell>{column}</Table.HeaderCell>
                <Table.Cell dataKey={column} />
              </Table.Column>
            )
          })
        }
        {/* <Table.Column width={120} fixed="right">
          <Table.HeaderCell>Action</Table.HeaderCell>

          <Table.Cell>
            {rowData => {
              function handleAction() {
                alert(`id:${rowData.id}`);
              }
              return (
                <span>
                  <a onClick={handleAction}> Edit </a> | <a onClick={handleAction}> Remove </a>
                </span>
              );
            }}
          </Table.Cell>
        </Table.Column> */}
      </Table >
      <div style={{ padding: 20 }}>
        <Pagination
          prev
          next
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="xs"
          layout={['total', '-', 'limit', '|', 'pager', 'skip']}
          total={rawData.length}
          limitOptions={[10, 20]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>
    </>
  )
}



export default Login