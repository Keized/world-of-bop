import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import Landscape from "./Landscape/Landscape";
import {Suspense} from 'react';
import Filters from "./Filters/Fiters";
import EditorButton from "./EditorButton/EditorButton";
import BopEditor from "./Editor/BopEditor";
import { filteredBopList } from '../Recoil/selectors';
import BopItem from './BopItem/BopItem';

export default function World() {
    const loadable = useRecoilValueLoadable(filteredBopList);

    console.log(loadable)

    switch (loadable.state) {
        case 'hasValue':
            return <div id="world" className="flex-1 relative overflow-hidden flex h-screen">
                <Landscape />
                <Filters />
                {
                    loadable.contents.map((bop) =><Suspense fallback={<></>}> <BopItem key={bop.id} id={bop.id} /> </Suspense>)
                }

                <EditorButton />
                <Suspense fallback={'Loading'} >
                    <BopEditor />
                </Suspense>
            </div>
        case 'loading':
            return <div>Loading...</div>;
        case 'hasError':
            throw loadable.contents;
    }


}

