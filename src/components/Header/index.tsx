import logoImg from '../../assets/logo.svg';
import { ContainerContent, ContainerHeader } from './styles';

interface HeaderProps{
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps){
	return (
		<ContainerHeader>
      <ContainerContent>
        <img src={logoImg} alt="MMMoney"/>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </ContainerContent>
    </ContainerHeader>
	)
}
