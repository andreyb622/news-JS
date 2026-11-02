import { ISource } from '../../../types';
import './sources.css';

type SourceItem = Pick<ISource, 'id' | 'name'>;

class Sources {
    public draw(data: SourceItem[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = document.querySelector<HTMLTemplateElement>('#sourceItemTemp')!;

        data.forEach((item: SourceItem) => {
            const sourceClone: DocumentFragment = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            sourceClone.querySelector<HTMLElement>('.source__item-name')!.textContent = item.name;
            sourceClone.querySelector<HTMLElement>('.source__item')!.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector<HTMLElement>('.sources')!.append(fragment);
    }
}

export default Sources;
