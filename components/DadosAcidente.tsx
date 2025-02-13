import styles from "@/constants/styles";
import { FormikProps } from "formik";
import { View } from "react-native";
import { RadioButton, TextInput, Text, List } from "react-native-paper";
import { DatePickerInput } from "react-native-paper-dates";
const DadosAcidente = ({ values, handleChange, handleBlur}: any) => (
<List.Accordion title="Dados do Acidente" left={(props) => <List.Icon {...props} icon="alert-circle" />}>
        <View style={styles.section}>
            
          <View style={{marginBottom: 15}}>
            <View style={{flex: 1, justifyContent: 'space-between', backgroundColor:'#ffff', borderTopEndRadius: 5}}>
            <RadioButton.Group
              onValueChange={handleChange('acidente.tipo')}
              value={values.acidente.tipo}
            >
              <View style={{flexDirection: 'column'}}>
                <Text style={[styles.input,{padding: 15, marginBottom: 0, fontSize: 16, fontWeight: '600', color: '#494848'}]}>Tipo do Acidente</Text>
                <View style={{marginEnd: 60, marginTop: -15}}>
                  <RadioButton.Item label="Acidente típico" value="tipico" />
                  <RadioButton.Item label="Acidente de trajeto" value="trajeto" style={{marginTop: -15}}/>
                </View>
              </View>
            </RadioButton.Group>
            </View>
          </View>
          
          <View style={{marginBottom: 15}}>
            <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor:'#ffff', borderTopEndRadius: 5}}>
            <RadioButton.Group
              onValueChange={handleChange('acidente.emitiuCat')}
              value={values.acidente.emitiuCat}
            >
              <View style={{flexDirection: 'row'}}>
              <Text style={[styles.input,{padding: 15, marginBottom: 0, fontSize: 16, fontWeight: '600', color: '#494848',marginRight: -20}]}>Foi Emitida a CAT?</Text>
                <RadioButton.Item label="SIM" value="S" style={{marginRight: -25}}/>
                <RadioButton.Item label="NÃO" value="N" style={{marginRight: -25}}/>
              </View>
            </RadioButton.Group>
            </View>
          </View>
          <TextInput
            label="Nome do Estabelecimento"
            value={values.acidente.nomeEstabelecimento}
            onChangeText={handleChange('acidente.nomeEstabelecimento')}
            onBlur={handleBlur('acidente.nomeEstabelecimento')}
            style={styles.input}
          />
          <TextInput
            label="Setor do estabeleciento do acidente"
            value={values.acidente.setorAcidente}
            onChangeText={handleChange('acidente.setorAcidente')}
            onBlur={handleBlur('acidente.setorAcidente')}
            style={styles.input}
          />
          <TextInput
            label="Município do Acidente"
            value={values.acidente.municipioAcidente}
            onChangeText={handleChange('acidente.municipioAcidente')}
            onBlur={handleBlur('acidente.municipioAcidente')}
            style={styles.input}
          />
          <TextInput
            label="Endereço do Acidente"
            value={values.acidente.enderecoAcidente}
            onChangeText={handleChange('acidente.enderecoAcidente')}
            onBlur={handleBlur('acidente.enderecoAcidente')}
            style={styles.input}
          />
          <DatePickerInput
            style={styles.input}
            label={'Data do Acidente'}           
            locale='pt'
            saveLabel='Data do Acidente'
            value={values.acidente.data}
            onChange={e=>handleChange('acidente.data')}
            inputMode='start'
          />
          <TextInput
            label="Hora do Acidente"
            value={values.acidente.hora}
            onChangeText={handleChange('acidente.hora')}
            onBlur={handleBlur('acidente.hora')}
            style={styles.input}
          />
          <TextInput
            label="Após quantas horas trabalhadas"
            value={values.acidente.horasTrabalhadas}
            onChangeText={handleChange('acidente.horasTrabalhadas')}
            onBlur={handleBlur('acidente.horasTrabalhadas')}
            style={styles.input}
          />
          <View style={{marginBottom: 15}}>
            <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor:'#ffff', borderTopEndRadius: 5}}>
            <RadioButton.Group
              onValueChange={handleChange('acidente.fazHorasExtras')}
              value={values.acidente.fazHorasExtras}
            >
              <View style={{flexDirection: 'row'}}>
              <Text style={[styles.input,{padding: 15, marginBottom: 0, fontSize: 16, fontWeight: '600', color: '#494848',marginRight: -20}]}>Faz Horas Extras?</Text>
                <RadioButton.Item label="SIM" value="S" style={{marginRight: -25}}/>
                <RadioButton.Item label="NÃO" value="N" style={{marginRight: -25}}/>
              </View>
            </RadioButton.Group>
            </View>
          </View>
          <TextInput
            label="Descreva a qtde de Horas Extras"
            value={values.acidente.qtdHorasExtras}
            onChangeText={handleChange('acidente.qtdHorasExtras')}
            onBlur={handleBlur('acidente.qtdHorasExtras')}
            style={styles.input}
          />
          <TextInput
            label="Função no Momento do Acidente"
            value={values.acidente.funcaoAcidente}
            onChangeText={handleChange('acidente.funcaoAcidente')}
            onBlur={handleBlur('acidente.funcaoAcidente')}
            style={styles.input}
          />
          <TextInput
            label="Quanto tempo na função"
            value={values.acidente.tempoFuncao}
            onChangeText={handleChange('acidente.tempoFuncao')}
            onBlur={handleBlur('acidente.tempoFuncao')}
            style={styles.input}
          />
          <View style={{marginBottom: 15}}>
            <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor:'#ffff', borderTopEndRadius: 5}}>
            <RadioButton.Group
              onValueChange={handleChange('acidente.teveTreinamento')}
              value={values.acidente.teveTreinamento}
            >
              <View style={{flexDirection: 'row'}}>
              <Text style={[styles.input,{padding: 15, marginBottom: 0, fontSize: 16, fontWeight: '600', color: '#494848',marginRight: -20}]}>Teve Treinamento?</Text>
                <RadioButton.Item label="SIM" value="S" style={{marginRight: -25}}/>
                <RadioButton.Item label="NÃO" value="N" style={{marginRight: -25}}/>
              </View>
            </RadioButton.Group>
            </View>
          </View>
          <View style={styles.input}>
            <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor:'#ffff', borderTopEndRadius: 5}}>
            <RadioButton.Group
              onValueChange={handleChange('acidente.teveTreinamentoComp')}
              value={values.acidente.teveTreinamentoComp}
            >
              <Text style={[styles.input,{padding: 15, marginBottom: 0, fontSize: 16, fontWeight: '600', color: '#494848'}]}>Treinamento Comprovado?</Text>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <RadioButton.Item label="SIM" value="S" style={{marginRight: -25, marginTop: -20}}/>
                <RadioButton.Item label="NÃO" value="N" style={{marginRight: -15, marginTop: -20}}/>
              </View>
            </RadioButton.Group>
            </View>
          </View>
          <TextInput
            label="Descreva o Treinamento"
            value={values.acidente.descricaoTreinamento}
            onChangeText={handleChange('acidente.descricaoTreinamento')}
            onBlur={handleBlur('acidente.descricaoTreinamento')}
            style={styles.input}
          />
          <View style={styles.input}>
            <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor:'#ffff', borderTopEndRadius: 5}}>
            <RadioButton.Group
              onValueChange={handleChange('acidente.causaAcidenteManuEq')}
              value={values.acidente.causaAcidenteManuEq}
            >
              <Text style={[styles.input,{padding: 15, marginBottom: 0, fontSize: 16, fontWeight: '600', color: '#494848'}]}>Acidente ocorreu em situação de manutenção de equipamento ou máquina</Text>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <RadioButton.Item label="SIM" value="S" style={{marginRight: -25, marginTop: -20}}/>
                <RadioButton.Item label="NÃO" value="N" style={{marginRight: -15, marginTop: -20}}/>
              </View>
            </RadioButton.Group>
            </View>
          </View>
          <TextInput
            label="Causa do Acidente"
            value={values.acidente.causaAcidente}
            onChangeText={handleChange('acidente.causaAcidente')}
            onBlur={handleBlur('acidente.causaAcidente')}
            style={styles.input}
          />
          <TextInput
            label="Diagnóstico da Lesão"
            value={values.acidente.diagnosticoLesao}
            onChangeText={handleChange('acidente.diagnosticoLesao')}
            onBlur={handleBlur('acidente.diagnosticoLesao')}
            style={styles.input}
          />
          <TextInput
            label="Causa básica do Óbito"
            value={values.acidente.causaObito}
            onChangeText={handleChange('acidente.causaObito')}
            onBlur={handleBlur('acidente.causaObito')}
            style={styles.input}
          />          
          <View style={styles.input}>
            <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor:'#ffff', borderTopEndRadius: 5}}>
            <RadioButton.Group
              onValueChange={handleChange('acidente.maisTrabalhadoresAtingidos.res')}
              value={values.acidente.maisTrabalhadoresAtingidos.res}
            >
              <Text style={[styles.input,{padding: 15, marginBottom: 0, fontSize: 16, fontWeight: '600', color: '#494848'}]}>Mais Trabalhadores Atingidos?</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: -25}}>
                <View style={{ flexDirection: 'column'}}>
                  <RadioButton.Item label="SIM" value="S" />
                  <RadioButton.Item label="NÃO" value="N" />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginRight: 70, marginTop: 10}}>
                  <Text style={{fontSize: 16, fontWeight: '600', color: '#494848'}}>Quantos?</Text>
                  <Text style={{fontSize: 16, fontWeight: 600}}>(</Text>
                  <View style={{height: 30}}>
                    <TextInput
                      style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: 16, width: 40, backgroundColor: '#fff'}}
                      value={values.acidente.maisTrabalhadoresAtingidos.qtd}
                      onChangeText={handleChange('acidente.maisTrabalhadoresAtingidos.qtd')}
                      onBlur={handleBlur('acidente.maisTrabalhadoresAtingidos.qtd')}
                    />
                    </View>
                    <Text style={{fontSize: 16, fontWeight: 600}}>)</Text>
                </View>
              </View>
            </RadioButton.Group>
            </View>
          </View>
          
          <View style={styles.input}>
            <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor:'#ffff', borderTopEndRadius: 5}}>
            <RadioButton.Group
              onValueChange={handleChange('acidente.acidente.outrosObitos.res')}
              value={values.acidente.outrosObitos.res}
            >
              <Text style={[styles.input,{padding: 15, marginBottom: 0, fontSize: 16, fontWeight: '600', color: '#494848'}]}>Outros óbitos?</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: -25}}>
                <View style={{ flexDirection: 'column'}}>
                  <RadioButton.Item label="SIM" value="S" />
                  <RadioButton.Item label="NÃO" value="N" />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginRight: 70, marginTop: 10}}>
                  <Text style={{fontSize: 16, fontWeight: '600', color: '#494848'}}>Quantos?</Text>
                  <Text style={{fontSize: 16, fontWeight: 600}}>(</Text>
                  <View style={{height: 30}}>
                    <TextInput
                      style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: 16, width: 40, backgroundColor: '#fff'}}
                      value={values.acidente.outrosObitos.qtd}
                      onChangeText={handleChange('acidente.outrosObitos.qtd')}
                      onBlur={handleBlur('acidente.outrosObitos.qtd')}
                    />
                    </View>
                    <Text style={{fontSize: 16, fontWeight: 600}}>)</Text>
                </View>
              </View>
            </RadioButton.Group>
            </View>
          </View>

          <View style={styles.input}>
            <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor:'#ffff', borderTopEndRadius: 5}}>
            <RadioButton.Group
              onValueChange={handleChange('acidente.outrosAcidentes.res')}
              value={values.acidente.outrosAcidentes.res}
            >
              <Text style={[styles.input,{padding: 15, marginBottom: 0, fontSize: 16, fontWeight: '600', color: '#494848'}]}>Outros óbitos?</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: -25}}>
                <View style={{ flexDirection: 'column'}}>
                  <RadioButton.Item label="SIM" value="S" />
                  <RadioButton.Item label="NÃO" value="N" />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginRight: 70, marginTop: 10}}>
                  <Text style={{fontSize: 16, fontWeight: '600', color: '#494848'}}>Quantos?</Text>
                  <Text style={{fontSize: 16, fontWeight: 600}}>(</Text>
                  <View style={{height: 30}}>
                    <TextInput
                      style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: 16, width: 40, backgroundColor: '#fff'}}
                      value={values.acidente.outrosAcidentes.qtd}
                      onChangeText={handleChange('acidente.outrosAcidentes.qtd')}
                      onBlur={handleBlur('acidente.outrosAcidentes.qtd')}
                    />
                    </View>
                    <Text style={{fontSize: 16, fontWeight: 600}}>)</Text>
                </View>
              </View>
            </RadioButton.Group>
            </View>
          </View>

        </View>
</List.Accordion>
);

export default DadosAcidente;