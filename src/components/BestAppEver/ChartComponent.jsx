import React, { useEffect, useState } from 'react';
import { PieChart, BarChart } from '@mui/x-charts';
import { useComics } from "@/context/ComicsProvider";
import styles from "./BestAppEver.module.css";
const ChartComponent = () => {
    const { comicsState, getPublisherColor, getWritersWithComicCount } = useComics();
    const [info, setInfo] = useState([]);
    const [writersData, setWritersData] = useState([]);

    const updateInfo = () => {
        const publisherData = comicsState.reduce((acc, comic) => {
            if (acc[comic.publisher]) {
                acc[comic.publisher].value++;
            } else {
                acc[comic.publisher] = { label: comic.publisher, value: 1, color: getPublisherColor(comic.publisher) };
            }
            return acc;
        }, {});
        setInfo(Object.values(publisherData));

        const writersCount = getWritersWithComicCount();
        const writersDataArray = Object.entries(writersCount).map(([writer, count]) => ({
            label: writer,
            value: count
        }));
        // console.log(writersDataArray);
        setWritersData(writersDataArray);
    };

    useEffect(() => {
        const interval = setInterval(updateInfo, 3000);
        return () => clearInterval(interval);
    }, [comicsState]);

    return (
        <div className={styles.container}>
            <PieChart series={[{ data: info }]} width={400} height={200} />
            <PieChart series={[{ data: writersData }]} width={600} height={200} />
        </div>
    );
};

export default ChartComponent;